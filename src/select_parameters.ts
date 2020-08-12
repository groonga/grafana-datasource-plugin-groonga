import { GroongaQuery } from 'types';
import * as queryDefs from './query_def';

const timekey_alias = 'AGGTIME';

interface AggregateParam {
  refId: string;
  aggString: string;
  aggKeyStr: string;
  aggTarget: string;
  aggInterval: number; // aggregate span(sec)
}

export class SelectParameters {
  timeField: string;
  rangeFrom: number;
  rangeTo: number;

  table: string;

  query: string;
  filter: string;
  sortby: string;
  limit: number;
  intervalMs: number;

  aggs: AggregateParam[];
  /*refId: string;
  aggString: string;
  aggKeyStr: string;
  aggTarget: string;
  aggInterval: number; // aggregate span(sec)
  */

  constructor(
    _timeField: string,
    _groongaQuerys: GroongaQuery[],
    _timeRangeFrom: number,
    _timeRangeTo: number,
    _intervalMs: number
  ) {
    this.rangeFrom = _timeRangeFrom;
    this.rangeTo = _timeRangeTo;
    this.table = _groongaQuerys[0].table;
    this.timeField = _timeField;
    this.query = _groongaQuerys[0].queryText === undefined ? '' : _groongaQuerys[0].queryText;
    this.filter = _groongaQuerys[0].filter;
    this.sortby = _groongaQuerys[0].sortby;
    this.limit = _groongaQuerys[0].limit;
    /*
    this.refId = _groongaQuerys[0].refId;
    this.aggString = _groongaQuerys[0].aggregate;
    this.aggKeyStr = _groongaQuerys[0].aggregateKeyStr;
    this.aggTarget = _groongaQuerys[0].aggregateTarget;
    this.aggInterval = _groongaQuerys[0].aggregateInterval === undefined ? 0 : _groongaQuerys[0].aggregateInterval;
    */

    this.aggs = [];
    _groongaQuerys.forEach((_agg: GroongaQuery) => {
      let agg: AggregateParam = {
        refId: _agg.refId,
        aggString: _agg.aggregate,
        aggKeyStr: _agg.aggregateKeyStr,
        aggTarget: _agg.aggregateTarget,
        aggInterval: _agg.aggregateInterval === undefined ? 0 : _agg.aggregateInterval,
      };
      this.aggs.push(agg);
    });
    this.intervalMs = _intervalMs === undefined ? 1000 : _intervalMs;
  }

  private isEnableAggregate(_index: number) {
    let index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    let aggQuery = queryDefs.getAggTypesQueryStr(this.aggs[index].aggString);
    return this.isExist(this.aggs[index].aggKeyStr) && aggQuery.length > 0;
  }

  getAggTimeColName(): string {
    return timekey_alias;
  }
  isOnlyAggTimeCol(_index: number): boolean {
    let index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    return this.aggs[index].aggKeyStr === this.getAggTimeColName();
  }

  isAggregate(_index: number): boolean {
    let index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    let aggQuery = queryDefs.getAggTypesQueryStr(this.aggs[index].aggString);
    return this.isExist(this.aggs[index].aggKeyStr) && aggQuery.length > 0;
  }

  getQueries(): any {
    return this.splitCsv(this.query);
  }
  getMetrics(_index: number): any {
    let index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    return this.splitCsv(this.aggs[index].aggKeyStr);
  }

  buildQueryParameters(): string {
    const limitNumDefault = 10; // defalut
    //let aggQuery = queryDefs.getAggTypesQueryStr(this.aggString);

    //let bEnableAggregate = this.isExist(this.aggKeyStr) && aggQuery.length > 0;
    let bEnableAggregate = this.isEnableAggregate(0);

    // create groonga RESTApi parameter
    let serializedOptionStr = '';
    // table : table name
    serializedOptionStr += this.getQueryStr(false, 'table', this.table);
    // filter : time range
    let timeRange = '';
    if (this.isExist(this.timeField)) {
      timeRange = 'between(' + this.timeField + ',' + this.rangeFrom.toString() + ',' + this.rangeTo.toString() + ')';
    }
    serializedOptionStr += this.getQueryStr(true, 'filter', timeRange);
    // filter : filter string
    if (this.isExist(this.filter)) {
      serializedOptionStr += '%26%26' + this.filter.replace(/&/g, '%26');
    }
    // limit : target record num
    if (this.limit !== undefined && this.limit >= 0) {
      let limitNum = bEnableAggregate ? limitNumDefault : this.limit;
      serializedOptionStr += this.getQueryStr(true, 'limit', limitNum);
    }
    // output_columns : output columns (not aggregate)
    if (this.isExist(this.query)) {
      serializedOptionStr += this.getQueryStr(true, 'output_columns', this.query);
    }

    if (!bEnableAggregate) {
      // without aggregate parameters
      // sortby : sort key columns (not aggregate)
      if (this.isExist(this.sortby)) {
        serializedOptionStr += this.getQueryStr(true, 'sortby', this.sortby);
      }
    } else {
      // Drilldown data
      this.aggs.forEach((agg: AggregateParam, index: number) => {
        serializedOptionStr += this.getDrilldownStrs(index);
      });

      //span agg
      //if (false) {
      let interval = this.aggs[0].aggInterval > 0 ? this.aggs[0].aggInterval : this.intervalMs * 60;
      //let interval = selectOptions.aggInterval;
      if (interval > 0) {
        // columns[T].stage,type,value
        serializedOptionStr += this.getColumnsStr(true, 'stage', 'initial');
        serializedOptionStr += this.getColumnsStr(true, 'type', 'UInt64');
        let unixtimeKeyStr = 'number_classify(' + this.timeField + '_unixtime,' + interval + ')';
        serializedOptionStr += this.getColumnsStr(true, 'value', unixtimeKeyStr);
      }
    }
    return serializedOptionStr;
  }

  private getDrilldownStrs(_index: number): string {
    let index = _index < 0 || _index >= this.aggs.length ? 0 : _index;
    let metrics = this.splitCsv(this.aggs[index].aggKeyStr);
    let aggQuery = queryDefs.getAggTypesQueryStr(this.aggs[index].aggString);
    let aggCol = queryDefs.getAggTypesColumnStr(this.aggs[index].aggString);
    let ddStrs = '';
    // aggregate parameters
    ddStrs += this.getDrilldownsStr(index, true, 'keys', this.aggs[index].aggKeyStr);
    ddStrs += this.getDrilldownsStr(index, true, 'output_columns', aggCol);
    if (metrics === undefined || metrics.length <= 1) {
      ddStrs += ',_key';
    } else {
      metrics.forEach(m => (ddStrs += ',_value.' + m));
    }
    //serializedOptionStr += '&drilldowns[' + refId + '].output_columns=_key,_nsubrecs,_max,_min,_sum,_avg';
    //serializedOptionStr += '&drilldowns[' + refId + '].calc_types=COUNT,MAX,MIN,SUM,AVG';
    ddStrs += this.getDrilldownsStr(index, true, 'calc_types', aggQuery);

    let limitNum = 10; // defalut
    if (this.limit !== undefined && this.limit >= 0) {
      limitNum = this.limit;
    }
    ddStrs += this.getDrilldownsStr(index, true, 'limit', limitNum);

    //serializedOptionStr += '&drilldowns[' + refId + '].calc_target=_id';
    if (this.isExist(this.aggs[index].aggTarget)) {
      ddStrs += this.getDrilldownsStr(index, true, 'calc_target', this.aggs[index].aggTarget);
    }

    ddStrs += this.getDrilldownsStr(index, true, 'sort_keys', '');
    if (metrics === undefined || metrics.length <= 1) {
      ddStrs += '_key';
    } else {
      metrics.forEach(m => (ddStrs += '_value.' + m + ','));
      ddStrs += aggCol;
    }
    return ddStrs;
  }

  private getQueryStr(needFirstAmpersand: boolean, paramname: string, paramvalue: any): string {
    return (needFirstAmpersand ? '&' : '') + paramname + '=' + paramvalue;
  }
  private getDrilldownsStr(index: number, needFirstAmpersand: boolean, paramname: string, paramvalue: any): string {
    return (
      (needFirstAmpersand ? '&' : '') + 'drilldowns[' + this.aggs[index].refId + '].' + paramname + '=' + paramvalue
    );
  }

  private getColumnsStr(needFirstAmpersand: boolean, paramname: string, paramvalue: any): string {
    return (
      (needFirstAmpersand ? '&' : '') + 'columns[' + this.getAggTimeColName() + '].' + paramname + '=' + paramvalue
    );
  }

  private isExist(_str?: string) {
    return !(_str === undefined || _str.length <= 0);
  }

  private splitCsv(_csvstr?: string) {
    let arr = _csvstr?.split(',');
    if (arr === undefined || arr?.length <= 0 || (arr?.length === 1 && arr[0].length <= 0)) {
      arr = undefined;
    }
    return arr;
  }
}

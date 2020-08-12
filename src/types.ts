import { DataQuery, DataSourceJsonData, SelectableValue } from '@grafana/data';

export interface GroongaQuery extends DataQuery {
  queryText?: string;
  interval: string;
  table: string;
  column: string;
  filter: string;
  sortby: string;
  limit: number;
  aggregateKeyStr: string;
  aggregate: string;
  aggregateTarget: string;
  aggregateInterval: number;
  aggregateOption: SelectableValue<string>;
}

export interface GroongaAggregation {
  id: string;
  type: string;
  settings?: any;
  field?: string;
}
/**
 * These are options configured for each DataSource instance
 */
export interface GroongaOptions extends DataSourceJsonData {
  //path?: string;
  timeField?: string;
}
/*
export type DataLinkConfig = {
  field: string;
  url: string;
};
*/
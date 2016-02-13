define([
  'angular',
  './directives',
  './query_ctrl'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.services');

  module.factory('GroongaDatasource', function($q,
                                               $httpParamSerializerJQLike,
                                               backendSrv) {
    function params(data) {
      return $httpParamSerializerJQLike(data);
    }

    function GroongaDatasource(datasource) {
      this.datasource = datasource;
    }

    GroongaDatasource.prototype.testDatasource = function() {
      var options = {
        url: this.datasource.url + '/d/status'
      };
      return backendSrv.datasourceRequest(options).then(function() {
        return {
          status: 'success',
          title: 'Success',
          message: 'OK!'
        };
      });
    };

    GroongaDatasource.prototype.query = function(options) {
      var target = options.targets[0];
      var selectOptions = {
        table: target.table,
        filter: 'between(timestamp, ' +
                         options.range.from.unix() + ', "include", ' +
                         options.range.to.unix() + ', "include")',
        'drilldown[code].keys': 'timestamp, code',
        'drilldown[code].output_columns': '_value.timestamp, _value.code, _nsubrecs',
        'drilldown[code].sortby': '_value.timestamp',
        'drilldown[code].limit': -1
      };
      var requestOptions = {
        url: this.datasource.url + '/d/select?' + params(selectOptions)
      };
      return backendSrv.datasourceRequest(requestOptions).then(function(result) {
        var data = [];
        var seriesSet = {};
        var drilldown = result.data[1][1].code;
        var i;
        for (i = 2; i < drilldown.length; i++) {
          var record = drilldown[i];
          var timestamp = record[0];
          var code = record[1];
          var nCodes = record[2];
          var series = seriesSet[code];
          var datapoints;
          if (!series) {
            series = seriesSet[code] = {
              target: code,
              datapoints: []
            };
            data.push(series);
          }
          datapoints = series.datapoints;
          datapoints.push([nCodes, timestamp * 1000]);
        }
        return {data: data};
      });
    };

    return GroongaDatasource;
  });
});

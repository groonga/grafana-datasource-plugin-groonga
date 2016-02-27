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
      var column = target.column;
      var selectOptions = {
        table: target.table,
        output_columns: 'timestamp, ' + target.column,
        filter: 'between(timestamp, ' +
                         options.range.from.unix() + ', "include", ' +
                         options.range.to.unix() + ', "include")',
        limit: -1
      };
      var requestOptions = {
        url: this.datasource.url + '/d/select?' + params(selectOptions)
      };
      return backendSrv.datasourceRequest(requestOptions).then(function(result) {
        var data = [];
        var seriesSet = {};
        var select = result.data[1][0];
        var i;
        for (i = 2; i < select.length; i++) {
          var record = select[i];
          var timestamp = record[0];
          var value = record[1];
          var series = seriesSet[column];
          var datapoints;
          if (!series) {
            series = seriesSet[column] = {
              target: column,
              datapoints: []
            };
            data.push(series);
          }
          datapoints = series.datapoints;
          datapoints.push([value, timestamp * 1000]);
        }
        return {data: data};
      });
    };

    return GroongaDatasource;
  });
});

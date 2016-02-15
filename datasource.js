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
      var selectOptions = {};
      selectOptions.table = target.table,
      selectOptions.filter = 'between(timestamp, ' +
                             options.range.from.unix() + ', "include", ' +
                             options.range.to.unix() + ', "include")';
      selectOptions['drilldown[' + column + '].keys'] = 'timestamp, ' + column;
      selectOptions['drilldown[' + column + '].output_columns'] = '_value.timestamp, _value.' + column + ', _nsubrecs';
      selectOptions['drilldown[' + column + '].sortby'] = '_value.timestamp';
      selectOptions['drilldown[' + column + '].limit'] = -1;
      var requestOptions = {
        url: this.datasource.url + '/d/select?' + params(selectOptions)
      };
      return backendSrv.datasourceRequest(requestOptions).then(function(result) {
        var data = [];
        var seriesSet = {};
        var drilldown = result.data[1][1][column];
        var i;
        for (i = 2; i < drilldown.length; i++) {
          var record = drilldown[i];
          var timestamp = record[0];
          var value = record[1];
          var nValues = record[2];
          var series = seriesSet[value];
          var datapoints;
          if (!series) {
            series = seriesSet[value] = {
              target: value,
              datapoints: []
            };
            data.push(series);
          }
          datapoints = series.datapoints;
          datapoints.push([nValues, timestamp * 1000]);
        }
        return {data: data};
      });
    };

    return GroongaDatasource;
  });
});

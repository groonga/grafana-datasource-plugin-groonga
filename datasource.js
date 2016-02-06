define([
  'angular'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.services');

  module.factory('GroongaDatasource', function(backendSrv) {
    function GroongaDatasource(datasource) {
      this.datasource = datasource;
    }

    GroongaDatasource.prototype.testDatasource = function() {
      var options = {
        url: this.datasource.url + '/d/status'
      };
      return backendSrv.datasourceRequest(options).then(function(result) {
        return {
          status: 'success',
          title: 'Success',
          message: 'OK!'
        };
      });
    };

    return GroongaDatasource;
  });

});

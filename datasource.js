define([
  'angular'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.services');

  module.factory('GroongaDatasource', function($timeout) {
    function GroongaDatasource() {
    }

    GroongaDatasource.prototype.testDatasource = function() {
      return $timeout(function() {
        return {
          status: 'success',
          title: 'Success',
          message: 'OK!'
        };
      }, 1000);
    };

    return GroongaDatasource;
  });

});

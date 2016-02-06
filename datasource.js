define([
  'angular'
],
function (angular) {
  'use strict';

  alert('xxx');
  var module = angular.module('grafana.services');

  module.factory('GroongaDatasource', function($timeout) {
    function GroongaDatasource() {
    }

    return GroongaDatasource;
  });

});

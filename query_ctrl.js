define([
  'angular'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.controllers');

  module.controller('GroongaQueryCtrl', function ($scope) {

    $scope.init = function () {
      console.log('init');
      $scope.target.table = 'Logs';
    };

    $scope.update = function () {
      console.log('update');
      $scope.target.table = $scope.table;
      $scope.target.column = $scope.column;
      $scope.get_data();
    }

    $scope.init();

  });
});

define([
  'angular'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.controllers');

  module.controller('GroongaQueryCtrl', function ($scope, backendSrv) {

    $scope.init = function () {
      var options = {
        url: $scope.datasource.datasource.url + '/d/schema'
      };
      return backendSrv.datasourceRequest(options).then(function(response) {
        var tables = response.data[1].tables;
        angular.forEach(tables, function(table, tableName) {
          var hasTimeColumn = false;
          var columnName;
          for (columnName in table.columns) {
            if (table.columns[columnName].value_type.name === 'Time') {
              hasTimeColumn = true;
              break;
            }
          }
          if (hasTimeColumn) {
            $scope.availableTables.push(tableName);
          }
        });
      });
    };

    $scope.update = function () {
      console.log('update');
      $scope.target.table = $scope.table;
      $scope.target.column = $scope.column;
      $scope.get_data();
    }

    $scope.availableTables = [];
    $scope.init();

  });
});

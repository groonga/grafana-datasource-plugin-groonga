define([
  'angular'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.controllers');

  module.controller('GroongaQueryCtrl', function ($scope, backendSrv) {
    $scope.init = function () {
      var selectOptions = {};
      var options = {
        url: $scope.datasource.datasource.url + '/d/schema'
      };
      return backendSrv.datasourceRequest(options).then(function(response) {
        $scope.schema = response.data[1];
        var tables = $scope.schema.tables;
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

    $scope.updateTable = function () {
      $scope.target.table = $scope.table;
      var columns = $scope.schema.tables[$scope.table].columns;
      angular.forEach(columns, function(column, columnName) {
        switch (column.value_type.name) {
          case 'Int8':
          case 'Int16':
          case 'Int32':
          case 'Int64':
          case 'UInt8':
          case 'UInt16':
          case 'UInt32':
          case 'UInt64':
          case 'Float':
            $scope.availableColumns.push(columnName);
            break;
        }
      });
    }

    $scope.updateColumn = function () {
      $scope.target.column = $scope.column;
      $scope.get_data();
    }

    $scope.availableTables = [];
    $scope.availableColumns = [];
    $scope.init();

  });
});

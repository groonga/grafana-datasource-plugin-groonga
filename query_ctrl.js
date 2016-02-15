define([
  'angular'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.controllers');

  module.controller('GroongaQueryCtrl', function ($scope, backendSrv, $httpParamSerializerJQLike) {
    function params(data) {
      return $httpParamSerializerJQLike(data);
    }

    $scope.init = function () {
      var selectOptions = {};
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

    $scope.updateTable = function () {
      $scope.target.table = $scope.table;
      var columnListOptions = {
        table: $scope.table
      }
      var options = {
        url: $scope.datasource.datasource.url + '/d/column_list?' + params(columnListOptions)
      };
      return backendSrv.datasourceRequest(options).then(function(response) {
        var columns = response.data[1];
        angular.forEach(columns, function(column) {
          var columnName = column[1];
          if (angular.isString(columnName)) {
            $scope.availableColumns.push(columnName);
          }
        });
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

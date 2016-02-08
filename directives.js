define([
  'angular'
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.directives');

  module.directive('metricQueryEditorGroonga', function() {
    return {
      controller: 'GroongaQueryCtrl',
      templateUrl: 'app/plugins/datasource/groonga/partials/query.editor.html'
    };
  });

});

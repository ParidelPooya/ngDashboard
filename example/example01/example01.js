
(function() {
  var example01;

  example01 = angular.module('example01', ['ngDashboard']);

  example01.controller('ctrl1', [
    '$scope', function($scope) {
      return $scope.widgetList = [1, 2, 3, 4, 5];
    }
  ]);

}).call(this);

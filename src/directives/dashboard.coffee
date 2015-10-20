angular.module('ngDashboard', []).directive 'dashboard',['$compile', ($compile)->

  scope:
    widgetList: '='
    removeButton: '='

  replace:false
  restrict: 'EA'
  template:"<div ng-repeat='data in widgetList' class='{{prepareWidth(data)}} widget-container'>
      <em ng-show='removeButton' class='widget-btn glyphicon glyphicon-remove' ng-click='removeWidget($index)'></em>
      <div widget remove-button='removeButton' data='data'></div>
    </div>"

  controller: ($scope) ->

  link: ($scope, elm, attr) ->
    $scope.prepareWidth=(data)->
      return 'col-md-' + data.Size[0]

    $scope.removeWidget=(pos)->
      $scope.widgetList.splice(pos,1)

      return


]
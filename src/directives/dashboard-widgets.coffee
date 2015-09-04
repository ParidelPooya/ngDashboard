ngDashboard=angular.module('ngDashboard', [])

ngDashboard.directive 'dashboardWidget',['$compile', ($compile)->
  {
    scope:
      widgetList: '='

    restrict: 'EA'
    template:"
      <div ng-repeat='w in widgetList'>
        {{w}}
      </div>"

    link: (scope, elm, attr) ->
  }
]
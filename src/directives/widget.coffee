angular.module('ngDashboard').directive 'widget',['$compile', ($compile)->
  restrict: 'AE'
  replace:true

  link: (scope, elm, attrs) ->

    scope.$watch(attrs.data, (data) ->

      code="<div " + data.Directive + " class='{{data.ClassName}}' data='data'>" + "</div>"
      elm.html(code)
      $compile(elm.contents())(scope)
      return
    )
]
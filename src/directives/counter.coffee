angular.module('ngDashboard').directive 'counter',['$timeout', ($timeout)->
  restrict: 'EA'
  scope:
    data: '='

  template:"
    <div class='panel panel-warning wid-height-{{data.Size[1]}}'>
      <div class='panel-heading'>
        <h3 class='panel-title'>{{data.Title}}</h3>
      </div>
      <div class='panel-body'>
        <h2>{{LastNumber}}<h2>
      </div>
    </div>"


  link: (scope, elm, attr) ->
    scope.LastNumber=scope.data.Data.CountFrom

    Count=()->
      scope.LastNumber+=scope.data.Data.Add
      $timeout(Count,scope.data.Data.timeout)
      return

    Count()

    return
];
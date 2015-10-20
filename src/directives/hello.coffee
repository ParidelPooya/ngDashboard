angular.module('ngDashboard').directive 'hello',['$timeout', ($timeout)->
  restrict: 'EA'
  scope:
    data: '='

  template:"
    <div class='panel panel-warning wid-height-{{data.Size[1]}}'>
      <div class='panel-heading'>
        <h3 class='panel-title'>{{data.Title}}</h3>
      </div>
      <div class='panel-body'>
        <h2>Hello World!<h2>
      </div>
    </div>"


  link: (scope, elm, attr) ->
    return
];
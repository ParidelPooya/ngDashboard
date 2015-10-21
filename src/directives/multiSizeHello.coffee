angular.module('ngDashboard').directive 'multiSizeHello',['$timeout', ($timeout)->
  restrict: 'EA'
  scope:
    data: '='

  template:"
    <div class='panel panel-warning wid-height-{{data.Size[1]}}'>
      <div class='panel-heading'>
        <h3 class='panel-title'>{{data.Title}}</h3>
      </div>
      <div class='panel-body'>
        <div ng-show='data.Size[0]<=2'>
          <h2>Hello World!<h2>
        </div>
        <div ng-show='data.Size[0]>2'>
          <h2>Hello World! <h2>
          <h3>We can use additional space to show more data<h3>
        </div>

      </div>
    </div>"


  link: (scope, elm, attr) ->
    return
];
angular.module('ngDashboard').directive 'miniDashboard',['$timeout', ($timeout)->
  restrict: 'EA'
  scope:
    data: '='

  template:"
    <div class='panel panel-warning wid-height-{{data.Size[1]}}'>
      <div class='panel-heading'>
        <h3 class='panel-title'>{{data.Title}}</h3>
      </div>
      <div class='panel-body'>
        <dashboard widget-list='data.Data.widgetList' remove-button='data.Data.removeButton'></dashboard>
      </div>
    </div>"


  link: (scope, elm, attr) ->
    return
];
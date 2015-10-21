angular.module('ngDashboard', []).directive 'dashboard',['$compile', ($compile)->

  scope:
    widgetList: '='
    removeButton: '='
    resizeButton : '='
    dragDrop : '='

  replace:false
  restrict: 'EA'
  ###
  template:"<div ng-repeat='(wpos,data) in widgetList' class='{{prepareWidth(data)}} widget-container'>
      <span class='widget-btn'>

        <em ng-show='resizeButton' class='glyphicon glyphicon-transfer' ng-click='resizeWidget(data)'></em>
        <em ng-show='removeButton' class='glyphicon glyphicon-remove' ng-click='removeWidget(wpos)'></em>

      </span>
      <div widget remove-button='removeButton' data='data'></div>
    </div>"
  ###

  controller: ($scope) ->

  link: ($scope, elm, attr) ->
    template=""

    if $scope.dragDrop
      template="<div ng-repeat='(wpos,data) in widgetList' class='{{prepareWidth(data)}} widget-container' lr-drag-src=\"wPlace\" lr-drop-target=\"wPlace\" >
        <span class='widget-btn'>

          <em ng-show='resizeButton' class='glyphicon glyphicon-transfer' ng-click='resizeWidget(data)'></em>
          <em ng-show='removeButton' class='glyphicon glyphicon-remove' ng-click='removeWidget(wpos)'></em>

        </span>
        <div widget remove-button='removeButton' data='data'></div>
      </div>"
    else
      template="<div ng-repeat='(wpos,data) in widgetList' class='{{prepareWidth(data)}} widget-container'>
        <span class='widget-btn'>

          <em ng-show='resizeButton' class='glyphicon glyphicon-transfer' ng-click='resizeWidget(data)'></em>
          <em ng-show='removeButton' class='glyphicon glyphicon-remove' ng-click='removeWidget(wpos)'></em>

        </span>
        <div widget remove-button='removeButton' data='data'></div>
      </div>"


    elm.html(template)
    $compile(elm.contents())($scope);

    $scope.prepareWidth=(data)->
      return 'col-md-' + data.Size[0]

    $scope.removeWidget=(pos)->
      $scope.widgetList.splice(pos,1)

      return

    $scope.resizeWidget=(data)->
      currentSize=0
      for size,pos in data.SupportedSize
        if size[0]==data.Size[0] && size[1]==data.Size[1]
          currentSize=pos
          break

      nextSize=data.SupportedSize[(pos+1)%data.SupportedSize.length]

      data.Size[0]=nextSize[0]
      data.Size[1]=nextSize[1]

    return

]
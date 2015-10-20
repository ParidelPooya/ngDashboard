
(function() {
  var example;

  example = angular.module('example', ['ngDashboard']);

  example01.controller('ctrl1', [
    '$scope', function($scope) {
      this.widgetList = [
        {
          Directive:"hello",
          Title:'First Directive',
          Desc: 'View Battery Level',
          Icon: 'icon-car',
          Size:[6,2],
          Color:'#1797be',
          BGColor:'#42B6E9',
          SupportedSize:[[1,1],[2,2]],
          Data:{},
          SelBGColor:'#484848',
          ClassName:'widget'
        },
        {
          Directive:"hello",
          Title:'Second Directive',
          Desc: 'View Battery Level',
          Icon: 'icon-car',
          Size:[6,2],
          Color:'#1797be',
          BGColor:'#42B6E9',
          SupportedSize:[[1,1],[2,2]],
          Data:{},
          SelBGColor:'#484848',
          ClassName:'widget'
        }

      ];
      return
    }
  ]);

}).call(this);

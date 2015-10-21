

(function() {
  var example;

  example = angular.module('example', ['ngDashboard','lrDragNDrop']);

  example.controller('ctrl1', [
    '$scope', function($scope) {
      this.widgetList = [
          {
              Directive:"counter",
              Title:'New Counter 1',
              Desc: 'View Battery Level',
              Icon: 'icon-car',
              Size:[6,2],
              Color:'#1797be',
              BGColor:'#42B6E9',
              SupportedSize:[[1,1],[2,2]],
              Data:{
                  CountFrom:1,
                  Add:3,
                  timeout:400
              },
              SelBGColor:'#484848',
              ClassName:'widget'
          },
          {
              Directive:"counter",
              Title:'New Counter 2',
              Desc: 'View Battery Level',
              Icon: 'icon-car',
              Size:[6,2],
              Color:'#1797be',
              BGColor:'#42B6E9',
              SupportedSize:[[1,1],[2,2]],
              Data:{
                  CountFrom:1,
                  Add:3,
                  timeout:300
              },
              SelBGColor:'#484848',
              ClassName:'widget'
          },
          {
              Directive:"counter",
              Title:'New Counter 3',
              Desc: 'View Battery Level',
              Icon: 'icon-car',
              Size:[6,2],
              Color:'#1797be',
              BGColor:'#42B6E9',
              SupportedSize:[[1,1],[2,2]],
              Data:{
                  CountFrom:1,
                  Add:3,
                  timeout:200
              },
              SelBGColor:'#484848',
              ClassName:'widget'
          },
          {
              Directive:"counter",
              Title:'New Counter 4',
              Desc: 'View Battery Level',
              Icon: 'icon-car',
              Size:[6,2],
              Color:'#1797be',
              BGColor:'#42B6E9',
              SupportedSize:[[1,1],[2,2]],
              Data:{
                  CountFrom:1,
                  Add:3,
                  timeout:100
              },
              SelBGColor:'#484848',
              ClassName:'widget'
          }
      ];

      return
    }
  ]);

}).call(this);

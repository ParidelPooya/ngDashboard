
(function() {
  var example;

  example = angular.module('example', ['ngDashboard']);

  example.controller('ctrl1', [
    '$scope', function($scope) {
      this.SelectedScreen=1;

      this.Screens =[
        [
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
        ],
        [
          {
            Directive:"counter",
            Title:'Counter 1',
            Desc: 'View Battery Level',
            Icon: 'icon-car',
            Size:[4,2],
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
          },
          {
            Directive:"counter",
            Title:'Counter 2',
            Desc: 'View Battery Level',
            Icon: 'icon-car',
            Size:[2,3],
            Color:'#1797be',
            BGColor:'#42B6E9',
            SupportedSize:[[1,1],[2,2]],
            Data:{
              CountFrom:7,
              Add:3,
              timeout:500
            },
            SelBGColor:'#484848',
            ClassName:'widget'
          }

        ]
      ];

      this.widgetList=this.Screens[this.SelectedScreen];

      this.NextScreen=function(){
        this.SelectedScreen=(this.SelectedScreen+1)%this.Screens.length;
        this.widgetList=this.Screens[this.SelectedScreen];

        console.log(this.widgetList)
      }

      return
    }
  ]);

}).call(this);

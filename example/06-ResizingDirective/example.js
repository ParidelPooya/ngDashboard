

(function() {
  var example;

  example = angular.module('example', ['ngDashboard']);

  example.controller('ctrl1', [
    '$scope', function($scope) {
      this.widgetList = [];

      this.AddNew=function(){

        this.widgetList.push({
              Directive:"counter",
              Title:'New Counter',
              Desc: 'View Battery Level',
              Icon: 'icon-car',
              Size:[2,2],
              Color:'#1797be',
              BGColor:'#42B6E9',
              SupportedSize:[[2,2],[4,2],[2,4],[4,4]],
              Data:{
                CountFrom:1,
                Add:3,
                timeout:100
              },
              SelBGColor:'#484848',
              ClassName:'widget'
            }

        )
      };

      return
    }
  ]);

}).call(this);

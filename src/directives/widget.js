// Generated by CoffeeScript 1.9.1
(function() {
  angular.module('ngDashboard').directive('widget', [
    '$compile', function($compile) {
      return {
        restrict: 'AE',
        replace: true,
        link: function(scope, elm, attrs) {
          return scope.$watch(attrs.data, function(data) {
            var code;
            code = "<div " + data.Directive + " class='{{data.ClassName}}' data='data'>" + "</div>";
            elm.html(code);
            $compile(elm.contents())(scope);
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=widget.js.map

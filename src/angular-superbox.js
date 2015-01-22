(function () {
  'use strict';

  var module = angular.module('superbox', []).run(['$anchorScroll', function ($anchorScroll) {
    $anchorScroll.yOffset = 30;   // always scroll some extra pixels
  }]);

  module.directive('superbox', ['$location', '$anchorScroll', function ($location, $anchorScroll) {

    return {
      templateUrl: 'templates/superbox/superbox.html',
      restrict: 'E',
      scope: {
        superboxModel: '=',
        superboxActions: '=',
        superboxOptions: '=?'
      },
      link: function (scope) {

        // Mapping model fields if necessary...
        if(scope.superboxOptions && scope.superboxOptions.fields){
          Object.getOwnPropertyNames(scope.superboxOptions.fields).forEach(function(val) {
            angular.forEach(scope.superboxModel, function(entry){
              entry[val] = entry[scope.superboxOptions.fields[val]];
            });
          });
        }

        scope._currentEntry = null;

        scope.currentEntry = function (entry) {
          if (entry) {
            console.log('current entry: ' + JSON.stringify(entry));
          }
          if (arguments.length === 1) {
            scope._currentEntry = arguments[0];
            $location.hash('superbox-show-' + entry.id);
            $anchorScroll();
            console.log('setting new current entry: ' + JSON.stringify(scope._currentEntry));
          }
          return scope._currentEntry;
        };

      }
    };

  }
  ]);

  module.directive('superboxList', [function () {

    return {
      templateUrl: 'templates/superbox/superbox-list.html',
      restrict: 'E',
      scope: {
        entry: '=',
        actions: '=',
        currentEntry: '='
      },
      link: function (scope) {

        scope.isSelected = function () {
          return scope.currentEntry() === scope.entry;
        };

        scope.close = function () {
          console.log('closing');
          scope.currentEntry("undefined");
        };


      }
    };
  }]);

}());

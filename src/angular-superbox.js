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
        if (scope.superboxOptions && scope.superboxOptions.fieldMapping) {
          Object.getOwnPropertyNames(scope.superboxOptions.fieldMapping).forEach(function (val) {
            angular.forEach(scope.superboxModel, function (entry) {
              entry[val] = entry[scope.superboxOptions.fieldMapping[val]];
            });
          });
        }

        for (var i = 0; i < scope.superboxModel.length; i++) {
          if (!scope.superboxModel[i].id) {
            scope.superboxModel[i].id = i;
          }
        }

        scope._currentEntry = null;

        scope.currentEntry = function (entry) {
          if (arguments.length === 1) {
            scope._currentEntry = entry;
            $location.hash('superbox-show-' + entry.id);
            $anchorScroll();
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
          scope.currentEntry("undefined");
        };


      }
    };
  }]);

}());

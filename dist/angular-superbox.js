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

angular.module('superbox').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/superbox/superbox.html',
    "<div class=\"as-superbox\" ng-model-options=\"{ getterSetter: true }\">\n" +
    "    <superbox-list entry=\"entry\"  actions=\"superboxActions\" current-entry=\"currentEntry\" ng-repeat=\"entry in superboxModel\"></superbox-list>\n" +
    "    <div class=\"superbox-float\"></div>\n" +
    "</div>"
  );


  $templateCache.put('templates/superbox/superbox-list.html',
    "<div class=\"as-superbox-list\" ng-click=\"currentEntry(entry)\">\n" +
    "    <img ng-src=\"{{entry.img_thumb}}\"\n" +
    "         data-img=\"{{entry.img_full}}\"\n" +
    "         alt=\"{{entry.alt}}\" title=\"{{entry.title}}\" class=\"as-superbox-img\">\n" +
    "</div>\n" +
    "<div id=\"superbox-show-{{entry.id }}\" class=\"as-superbox-show\" style=\"display: block\" ng-show=\"isSelected(entry)\">\n" +
    "    <div id=\"imgInfoBox\" class=\"as-superbox-imageinfo\">\n" +
    "        <h1>{{entry.title}}</h1>\n" +
    "        <span>\n" +
    "            <p class=\"as-superbox-img-description\">{{entry.description}}</p>\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "\n" +
    "           <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"padding: 5px; margin: 5px;\" ng-repeat=\"actionObj in actions\" ng-click=\"actionObj.action(entry)\">\n" +
    "               {{actionObj.label}}\n" +
    "           </button>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <img ng-src=\"{{entry.img_full}}\" class=\"as-superbox-current-img\">\n" +
    "\n" +
    "    <span class=\"glyphicon glyphicon-remove as-superbox-close\" aria-hidden=\"true\" ng-click=\"close()\"></span>\n" +
    "</div>"
  );

}]);

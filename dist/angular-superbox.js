(function () {
  'use strict';

  var module = angular.module('superbox', []).run(['$anchorScroll', function ($anchorScroll) {
    $anchorScroll.yOffset = 30;   // always scroll by 50 extra pixels
  }]);

  module.directive('superbox', ['$location', '$anchorScroll', function ($location, $anchorScroll) {

    return {
      templateUrl: 'templates/superbox/superbox.html',
      restrict: 'E',
      scope: {
        superboxModel: '=',
        superboxActions: '='
      },
      link: function (scope) {

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
angular.module('superbox').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/superbox/superbox.html',
    "<div class=\"superbox\" ng-model-options=\"{ getterSetter: true }\">\n" +
    "    <superbox-list entry=\"entry\"  actions=\"superboxActions\" current-entry=\"currentEntry\" ng-repeat=\"entry in superboxModel\"></superbox-list>\n" +
    "    <div class=\"superbox-float\"></div>\n" +
    "</div>"
  );


  $templateCache.put('templates/superbox/superbox-list.html',
    "<div class=\"superbox-list\" ng-click=\"currentEntry(entry)\">\n" +
    "    <img ng-src=\"{{entry.img_thumb}}\"\n" +
    "         data-img=\"{{entry.img_full}}\"\n" +
    "         alt=\"{{entry.alt}}\" title=\"{{entry.title}}\" class=\"superbox-img\">\n" +
    "</div>\n" +
    "<div id=\"superbox-show-{{entry.id }}\" class=\"superbox-show\" style=\"display: block\" ng-show=\"isSelected(entry)\">\n" +
    "    <div id=\"imgInfoBox\" class=\"superbox-imageinfo\">\n" +
    "        <h1>{{entry.title}}</h1>\n" +
    "        <span>\n" +
    "            <p class=\"superbox-img-description\">{{entry.description}}</p>\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "\n" +
    "           <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"padding: 5px; margin: 5px;\" ng-repeat=\"actionObj in actions\" ng-click=\"actionObj.action(entry)\">\n" +
    "               {{actionObj.label}}\n" +
    "           </button>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <img ng-src=\"{{entry.img_full}}\" class=\"superbox-current-img\">\n" +
    "\n" +
    "    <div class=\"superbox-close\" ng-click=\"close()\"></div>\n" +
    "</div>"
  );

}]);

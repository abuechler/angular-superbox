(function () {
    'use strict';

    var module = angular.module('superbox', []);

    module.directive('superbox', [function () {

        return {
            templateUrl: 'templates/superbox/superbox.html',
            restrict: 'E',
            scope: {
                superboxModel: '=',
                superboxActions: '='
            },
            link: function (scope) {
                scope.show = function (entry) {
                    scope.currentEntry = entry;
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
                actions: '='
            },
            link: function (scope) {

                scope.isSelected = function (entry) {
                    return entry === scope.$parent.currentEntry;
                };

                scope.close = function () {
                    scope.$parent.currentEntry = null;
                };


            }
        };
    }]);

}());
angular.module('superbox').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/superbox/superbox.html',
    "<div class=\"superbox\">\n" +
    "    <superbox-list entry=\"entry\"  actions=\"superboxActions\" is-selected='isSelected' ng-repeat=\"entry in superboxModel\" ng-click=\"show(entry)\"></superbox-list>\n" +
    "    <div class=\"superbox-float\"></div>\n" +
    "</div>"
  );


  $templateCache.put('templates/superbox/superbox-list.html',
    "<div class=\"superbox-list\" ng-click=\"click()\">\n" +
    "    <img ng-src=\"{{entry.img_thumb}}\"\n" +
    "         data-img=\"{{entry.img_full}}\"\n" +
    "         alt=\"{{entry.alt}}\" title=\"{{entry.title}}\" class=\"superbox-img\">\n" +
    "</div>\n" +
    "<div class=\"superbox-show\" style=\"display: block\" ng-show=\"isSelected(entry)\">\n" +
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

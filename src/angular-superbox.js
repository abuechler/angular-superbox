(function () {
    'use strict';

    var module = angular.module('superbox', []);
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length-1].src;

    module.directive('superbox', [function () {

        var templatePath = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'partials/superbox.html';

        return {
            templateUrl: templatePath,
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

        var templatePath = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1) + 'partials/superbox-list.html';

        return {
            templateUrl: templatePath,
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
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
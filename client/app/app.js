/**
 * @callback when angular is loaded
 */
(function(angular) {
    angular.module('app', ['maps', 'places', 'eventFactory']);
})(angular);
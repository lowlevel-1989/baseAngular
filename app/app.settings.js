var _DEPENDENCIES = require('./app.module');

var API = 'http://api.formatcom.com/';
var APP = angular.module('core', _DEPENDENCIES);

APP.constant('api', {url: API});

APP.controller('Controller', ['$scope', function ($scope) {
   $scope.loading = true;
}]);

module.exports = APP;

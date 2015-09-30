angular.module('routes', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', '$sceProvider', function ($routeProvider, $locationProvider, $sceProvider) {

   $routeProvider.when('/working', {
      templateUrl: '/working/view.html',
   })
   .otherwise({
      redirectTo: '/working'
   });

   $locationProvider.hashPrefix('!');
   $sceProvider.enabled(false);

}]);
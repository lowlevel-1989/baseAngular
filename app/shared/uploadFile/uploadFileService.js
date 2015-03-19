(function(){
   angular.module('uploadFileService', ['uploadFileDirective'])
      .factory('foodDetailFactory', ['$http', '$q', 'api',
         function ($http, $q, api){
            function uploadFile(file){
      
               var deferred = $q.defer();
               var formData = new formData();
               formData.append('file', file);

               $http({
                  method: 'post',
                  url: api.url + 'food/',
                  headers: {"Content-type": undefined},
                  transformRequest: angular.indentity,
                  data: formData
               })
               .success(function(data) {
                  deferred.resolve(data);
               })
               .error(function(data) {});

               return deferred.promise;
            }
            return {
               foodDetail: foodDetail
            };
         }]);
})();
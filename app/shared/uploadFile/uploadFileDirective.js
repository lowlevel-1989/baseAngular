(function(){
   angular.module('uploadFileDirective', [])

   .directive('fcFileModel', ['$parse', function ($parse) {

      var link = function(scope, element, attrs){
         element.on('change', function(e){
            $parse(attrs.fcFileModel)
               .assign(scope, this.files);
         });
      };
      return {
         restrict: 'A',
         link: link
      };
   }]);

})();
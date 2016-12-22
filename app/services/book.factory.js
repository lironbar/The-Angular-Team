angular.module('app')
.factory('bookFactory', ['$http','$q','$timeout', function($http, $q,$timeout) {
  return {
    getBooks: function(){
      var deferred = $q.defer();

       $http.get('app/data/books.json').then(function(res){
        deferred.resolve(res.data);
      });

      return deferred.promise;
    }
  }
}]);

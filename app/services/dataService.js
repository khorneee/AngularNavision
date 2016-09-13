/**
 * Created by adminlocal on 02/09/2016.
 */
angular.module('angularNavision').service('dataService', [ '$http', '$q', function($http, $q) {
    var deferred = null;
	var promise = null;
	deferred = $q.defer()
    promise = deferred.promise;

	
    return {
        getAll: getAll,
        getId : getId
    }

    function getAll () {
		
		var url = "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CustomerList";

        $http.get(url)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err)
            });

        return promise;
		console.log(promise)
    }

    function getId (id) {
		//var data = data.replace("'", "%27");
		alert(id);
		
		var filter = null;
		var url = null;
		
		
        filter = "?$filter=No eq " + "'" + id  + "'";
		url =  "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CustomerCard" + filter

		console.log(url)
		
        $http.get(url)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err)
            });

        return promise;
	    console.log(promise)
    }

}]);
/**
 * Created by adminlocal on 02/09/2016.
 */
angular.module('angularNavision').factory('dataFactory', [ '$http', '$q', function($http, $q) {

    return {
        getContacts : function(){
			
			var deferred = $q.defer();
			var url = "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CustomerList";
			
            $http.get(url)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err)
                });
            return deferred.promise;
        },
		getContact : function(id){
			
			var deferred = $q.defer();
			var filter = "?$filter=No eq " + "'" + id  + "'";
			var url =  "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CustomerCard" + filter;
			
			$http.get(url)
				.success(function(data) {
					deferred.resolve(data);
                })
				.error(function(err) {
					deferred.reject(err)
                });
			return deferred.promise;
		},
        postContact : function(datos){

            var deferred = $q.defer();
			
			$http({
			  method  : 'POST',
			  url     : "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CustomerCard",
			  data    : {"Name" : datos.Name,
						 "Address" : datos.Address,
						 "City": datos.City,
						 "E_Mail" : datos.Email
						},
			  headers : {'Content-Type' : 'application/json'} 
			 })
					.success(function(data) {
						deferred.resolve(data);
					})
					.error(function(err) {
						deferred.reject(err)
					});
				return deferred.promise;
        },
		modContact : function(id,datos){
			
            var deferred = $q.defer();

			var filter = "("  + "'" + id  + "'" + ")"
			var url =  "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CustomerCard" + filter;
			
			
			$http({
			  method  : 'MERGE',
			  url     : url,
			  data    : {"Name" : datos.Name,
						 "Address" : datos.Address,
						 "City": datos.City,
						 "E_Mail" : datos.Email
						},
			  headers : {'Content-Type' : 'application/json',
						 'If-Match' : '*'} 
			 })
					.success(function(data) {
						deferred.resolve(data);
					})
					.error(function(err) {
						deferred.reject(err)
					});
				return deferred.promise;
        },
		deleteContact : function(id){

            var deferred = $q.defer();

			var filter = "("  + "'" + id  + "'" + ")"
			var url =  "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CustomerCard" + filter;
						
			$http({
			  method  : 'DELETE',
			  url     : url,
			  headers : {'Content-Type' : 'application/json',
						 'If-Match' : '*'} 
			 })
					.success(function(data) {
						deferred.resolve(data);
					})
					.error(function(err) {
						deferred.reject(err)
					});
				return deferred.promise;
        },
		getInfoCompany : function(){

			var deferred = $q.defer();
			var url = "http://win-hgebp65n7o5:7048/DynamicsNAV90/OData/Company('CRONUS%20Espa%C3%B1a%20S.A.')/CompanyInfo";

			$http.get(url)
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(err) {
					deferred.reject(err)
				});
			return deferred.promise;
		}
    }
}]);
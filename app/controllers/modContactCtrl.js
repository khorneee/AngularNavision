/**
 * Created by adminlocal on 03/09/2016.
 */
angular.module('angularNavision')
    .controller('modContactCtrl', function($scope,dataService,dataFactory,$routeParams) {

        var no = $routeParams.no;

        dataFactory.getContact(no)
            .then(function(data) {

                $scope.Contact = data.value[0]

            })
            .catch(function(err){
                alert("Error al solicitar contacto")
            })
	    
		$scope.modificar = function(){
			

		dataFactory.modContact($scope.Contact.No,$scope.Contact)
            .then(function(data) {
                alert("El usuario se ha modificado")

            })
			.catch(function(err){
                alert("Error al modificar")
            })

		}	
    })
/**
 * Created by adminlocal on 02/09/2016.
 */
angular.module('angularNavision')
    .controller('contactCtrl', function($scope,$routeParams,dataService,dataFactory,$location) {
			
			var no = null;
            no = $routeParams.no;
			
		dataFactory.getContact(no)
            .then(function(data) {
				
				var dataPre = null;
				$scope.Contacts = null;
				
                dataPre = data.value[0];
				$scope.Contact = dataPre;
				
				console.log($scope.Contact.name);
				
            })
            .catch(function(err){
                alert(err)
            })
			
		$scope.delete = function(id){
				alert("click")
                dataFactory.deleteContact(id)
                    .then(function(data) {
                        alert("El usuario se ha modificado")
						$location.path('/contacts')
                    }).catch(function(err){
                        alert("Error al modificar")
                    })

		}
    })
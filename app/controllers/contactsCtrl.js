/**
 * Created by adminlocal on 02/09/2016.
 */
angular.module('angularNavision')
    .controller('contactsCtrl', function($scope,dataService,dataFactory) {

			
	    dataFactory.getContacts()
            .then(function(data) {
				
				var dataPre = null;
				$scope.Contacts = null;
				
                dataPre = data.value;
				$scope.Contacts = dataPre;

            })
            .catch(function(err){
                alert(err)
            })
			
		$scope.delete = function(id){
            alert("click")
            dataFactory.delContact($scope.Contact.Id)
                .then(function(data) {
                    alert("El usuario se ha eliminado")

                }).catch(function(err){
                    alert("Error al modificar")
                })

		}
    })
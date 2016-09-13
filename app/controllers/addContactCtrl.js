/**
 * Created by adminlocal on 03/09/2016.
 */
angular.module('angularNavision')
    .controller('addContactCtrl', function($scope,dataFactory,$http,$location) {

        $scope.sendRequest = function (){
			
             dataFactory.postContact($scope.Contact)
                 .then(function(data) {
                    // alert(data);
					alert("Se ha creado el usuario correctamente")
					$location.path('/contacts')
                 })
                 .catch(function(err){
                    // alert(err)
					alert("Error al insertar usuario")
                 })
        }
    })
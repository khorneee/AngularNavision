/**
 * Created by adminlocal on 03/09/2016.
 */
angular.module('angularNavision')
    .controller('contactsCtrl', function($scope,dataService,dataFactory,$routeParams) {

        var no = $routeParams.no;

        dataFactory.getContact(no)
            .then(function(data) {

                $scope.Contact = data

                dataFactory.delContact($scope.Contact.Id)
                    .then(function(data) {
                        alert("El usuario se ha modificado")

                    }).catch(function(err){
                        alert("Error al modificar")
                    })

            })
            .catch(function(err){
                alert("Error al solicitar contacto")
            })
    })
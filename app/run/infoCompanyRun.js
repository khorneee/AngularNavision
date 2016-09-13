/**
 * Created by adminlocal on 04/09/2016.
 */
angular.module('angularNavision')
    .run(function($rootScope,dataFactory) {

        dataFactory.getInfoCompany()
            .then(function(data) {

                var dataPre = null;
                $rootScope.CompanyInfo = null;

                dataPre = data.value;
                $rootScope.CompanyInfo = dataPre;

                console.log("en el run!!");

            })
            .catch(function(err){
                alert(err)
            })
    });
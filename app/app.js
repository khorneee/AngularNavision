/**
 * Created by adminlocal on 02/09/2016.
 */
angular.module('angularNavision', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html',
                controller: 'mainCtrl'
            })
            .when('/contacts', {
                templateUrl: 'app/views/contacts.html',
                controller: 'contactsCtrl'
            })
            .when('/404', {
                templateUrl: 'app/views/404.html',
                controller: '404Ctrl'
            })
            .when('/contact/:no', {
                templateUrl: 'app/views/contact.html',
                controller: 'contactCtrl'
            })
            .when('/addcontact', {
                templateUrl: 'app/views/addContactform.html',
                controller: 'addContactCtrl'
            })
            .when('/modcontact/:no', {
                templateUrl: 'app/views/modContactForm.html',
                controller: 'modContactCtrl'
            })
            .otherwise({
                redirectTo: '/404'
            });
    });
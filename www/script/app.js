define([
    'angular',
    'angular.route',
    'angular.animate',
    'angular.http-auth',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    var app = ng.module('app', [
        'ngRoute',
        'ngAnimate',
        'http-auth-interceptor',
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives'
    ]);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/index', {
                    templateUrl: 'view/index.html',
                    controller: 'IndexCtrl'
                }).
                when('/login', {
                    templateUrl: 'view/login.html',
                    controller: 'LoginCtrl'
                }).
                otherwise({
                    redirectTo: '/index'
                });
        }]);

    app.run(function(){

        $('#login').modal();

    });

    return app;
});
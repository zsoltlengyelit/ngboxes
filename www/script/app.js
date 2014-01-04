define([
    'angular',
    'angular.route',
    'angular.animate',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    var app = ng.module('app', [
        'ngRoute',
        'ngAnimate',
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

    return app;
});
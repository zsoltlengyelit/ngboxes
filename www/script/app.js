define([
    'angular',
    'angular.route',
    'angular.animate',
    'angular.resource',
    'angular.http-auth',
    './controllers/index',
    './factories/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    var app = ng.module('app', [
        'ngRoute',
        'ngAnimate',
        'ngResource',
        'http-auth-interceptor',
        'app.services',
        'app.controllers',
        'app.factories',
        'app.filters',
        'app.directives'
    ]);

    app.config(function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.
            when('/', {
                templateUrl: 'view/user/index.html',
                controller: 'UserCtrl'
            }).
            when('/user/new', {
                templateUrl: 'view/user/form.html',
                controller: 'UserFormCtrl'
            }).
            when('/user/edit/:userId', {
                templateUrl: 'view/user/form.html',
                controller: 'UserFormCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    });

    return app;
});
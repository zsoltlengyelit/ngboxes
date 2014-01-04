define([
    'require',
    'angular',
//    'angular.route',
//    'angular.animate',
    'app',
    'jquery'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
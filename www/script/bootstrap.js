define([
    'require',
    'angular',
    'app',
    'jquery',
    'semantic'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
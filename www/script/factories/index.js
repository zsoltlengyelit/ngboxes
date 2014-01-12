define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.factories', []);



    module.factory('User', function($resource, apiUrl){
        return $resource(apiUrl + 'user/:userId', {userId:'@id'});
    });

    module.constant('apiUrl', '/nglogin/server/silex/web/index.php/');

    return module;
});
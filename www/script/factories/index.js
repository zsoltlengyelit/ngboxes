define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.factories', []);



    module.factory('User', function($resource){
        return $resource('http://localhost/ngserver/index.php/user/:userId', {userId:'@id'});
    })

    return module;
});
define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.controllers', []);

    module.controller('IndexCtrl', ['$scope', function ($scope) {

    }]);

    // Controller for login action
    module.controller('LoginCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.send = function () {

            var formData = {
                username: $scope.username,
                password: $scope.password
            };

            $http({
                method: 'POST',
                url: '/nglogin/server/silex/web/index.php/login',
                data: $.param(formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data, status, headers, config) {
                    $location.path('/index');
                })
                .error(function (data, status) {
                    alert('error' + data);
                });

        };
    }
    ])
    ;

    return module;
})
;
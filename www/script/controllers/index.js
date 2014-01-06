define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.controllers', []);

    module.controller('MenuCtrl', function($scope, $http, $route){
        $scope.logout = function(){
            $http.get('http://localhost/ngserver/index.php/logout')
                .success(function () {
                    $route.reload();
                });
        };
    });

    module.controller('UserCtrl', function ($scope, User, $route) {
        $scope.users = User.query();

        $scope.delete = function(user){
            user.$remove(function(){
                $route.reload();
            });
        };
    });

    module.controller('UserFormCtrl', function($scope, User, $location, $routeParams){

        var userId = $routeParams.userId;
        if(userId){
            $scope.user = User.get({userId: userId});
        }else{
            $scope.user = new User();
        }

        $scope.save = function(){
            this.user.$save(function(){
                $location.path('/index');
            });
        };

    });

    // Controller for login action
    module.controller('LoginCtrl', ['$scope', '$http', '$location', 'authService', function ($scope, $http, $location, authService) {

        $scope.send = function () {

            var formData = {
                username: $scope.username,
                password: $scope.password
            };

            $http({
                method: 'POST',
                url: 'http://localhost/ngserver/index.php/login',
                data: $.param(formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data, status, headers, config) {
                    authService.loginConfirmed();
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
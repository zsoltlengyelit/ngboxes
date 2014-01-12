define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.controllers', []);

    module.controller('MenuCtrl', function ($scope, $http, $route, $rootScope, apiUrl) {
        $scope.logout = function () {
            $http.get(apiUrl + 'logout')
                .success(function () {
                    $route.reload();
                });
        };

        $scope.$watch('applicationSearch', function(){
            $rootScope.$broadcast('application.search', $scope.applicationSearch);
        });
    });

    module.controller('UserCtrl', function ($scope, User, $route) {
        $scope.users = User.query();

        $scope.$on('application.search', function(event, text){
            $scope.searchText = text;
        });

        $scope.remove = function (user) {
            user.$remove(function () {
                $route.reload();
            });
        };
    });

    module.controller('UserFormCtrl', function ($scope, User, $location, $routeParams) {

        var userId = $routeParams.userId;
        if (userId) {
            $scope.user = User.get({userId: userId});
        } else {
            $scope.user = new User();
        }

        $scope.save = function () {
            this.user.$save(function () {
                $location.path('/index');
            });
        };

    });

    // Controller for login action
    module.controller('LoginCtrl', function ($scope, $http, $location, authService, $rootScope, $timeout, apiUrl) {

            $scope.send = function () {

                $scope.errorMessage = null; // reset error message

                var formData = {
                    username: $scope.username,
                    password: $scope.password
                };

                $http({
                    method: 'POST',
                    url: apiUrl + 'login',
                    data: $.param(formData),  // pass in data as strings
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                    .success(function () {
                        authService.loginConfirmed();
                    })
                    .error(function (data) {
                        $timeout(function () {
                            $scope.errorMessage = data;
                            $rootScope.$broadcast('event:auth-loginRequired');
                        }, 100);
                    });

            };
        }
    )
    ;

    return module;
})
;
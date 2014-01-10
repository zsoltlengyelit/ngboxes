define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.directives', []);


    module
    /**
     * This directive will find itself inside HTML as a class,
     * and will remove that class, so CSS will remove loading image and show app content.
     * It is also responsible for showing/hiding login form.
     */
        .directive('authApplication', function () {
            return {
                restrict: 'C',
                link: function (scope, elem, attrs) {
                    //once Angular is started, remove class:
                    elem.removeClass('waiting-for-angular');

                    var login = elem.find('#login-modal');
                    var main = elem.find('#content');

                    scope.$on('event:auth-loginRequired', function () {
                        login
                            .modal('settings', {
                                closable: false,
                                onDeny: function () {
                                    return false;
                                }, onApprove: function () {
                                    return false;
                                }})
                            .modal('show');
                    });
                    scope.$on('event:auth-loginConfirmed', function () {
                        login.modal('hide');
                    });
                }
            }
        });

    module.directive('ngOnkeyup', function () {
        return {
            restrict: 'A',
            scope: {
                func: '&ngOnkeyup'
            },
            link: function (scope, elem, attrs) {
                elem.bind('keyup', scope.func);
            }
        };
    });

    return module;
});
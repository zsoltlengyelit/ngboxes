require.config({

    paths : {
        'comp' : '../components',
        'domReady' : 'comp/requirejs-domready/domReady',
        'angular' : 'comp/angular/angular',
        'angular.route' : 'comp/angular-route/angular-route',
        'angular.animate' : 'comp/angular-animate/angular-animate',
        'angular.resource' : 'comp/angular-resource/angular-resource',
        'angular.http-auth' : 'comp/angular-http-auth/src/http-auth-interceptor',
        'jquery' : 'comp/jquery/jquery',
        'semantic' : 'comp/semantic/build/packaged/javascript/semantic'
    },

    shim : {
        'angular' : {
            exports : 'angular'
        },
        'angular.route' : {
            deps : ['angular']
        },
        'angular.animate' : {
            deps : ['angular']
        },
        'angular.resource' : {
            deps : ['angular']
        },
        'angular.http-auth' : {
            deps : ['angular']
        },
        'jquery' : {
            exports : 'jQuery'
        },
        'semantic' : {
            deps : ['jquery']
        }
    },

    deps : ['./bootstrap']
});
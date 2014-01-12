require.config({

    paths : {
        'domReady' : '../components/requirejs-domready/domReady',
        'angular' : '../components/angular/angular',
        'angular.route' : '../components/angular-route/angular-route',
        'angular.animate' : '../components/angular-animate/angular-animate',
        'angular.resource' : '../components/angular-resource/angular-resource',
        'angular.http-auth' : '../components/angular-http-auth/src/http-auth-interceptor',
        'jquery' : '../components/jquery/jquery',
        'semantic' : '../components/semantic/build/packaged/javascript/semantic'
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
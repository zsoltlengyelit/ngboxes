require.config({

    paths : {
        'domReady' : '../components/requirejs-domready/domReady',
        'angular' : '../components/angular/angular',
        'angular.route' : '../components/angular-route/angular-route',
        'angular.animate' : '../components/angular-animate/angular-animate',
        'jquery' : '../components/jquery/jquery'
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
        'jquery' : {
            exports : 'jQuery'
        }
    },

    deps : ['./bootstrap']
});
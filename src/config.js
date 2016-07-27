//http://lgorithms.blogspot.com/2013/07/angularui-router-as-infrastructure-of.html
//http://www.funnyant.com/angularjs-ui-router/
var SIGL;
(function (SIGL) {
    //'use strict';
    var config = (function () {
        function config($stateProvider, $urlRouterProvider, $locationProvider, $logProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            this.$locationProvider = $locationProvider;
            this.$logProvider = $logProvider;
            this.$stateProvider
                .state("main", {
                url: '/?rcode&workspaceID',
                template: '<ui-view/>',
                views: {
                    'map': {
                        templateUrl: "Views/mapview.html",
                        controller: "SIGL.Controllers.MapController"
                    },
                    'sidebar': {
                        templateUrl: "Views/sidebarview.html",
                        controller: "SIGL.Controllers.SidebarController"
                    },
                    'navbar': {
                        templateUrl: "Views/navigationview.html",
                        controller: "SIGL.Controllers.NavbarController"
                    }
                }
            }); //end main state 
            this.$urlRouterProvider.otherwise('/');
            this.$locationProvider.html5Mode(true);
            //turns off angular-leaflet console spam
            this.$logProvider.debugEnabled(false);
        } //end constructor
        config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider'];
        return config;
    }()); //end class
    angular.module('SIGL', [
        'ui.router', 'ui.bootstrap', 'ui.checkbox',
        'mobile-angular-ui',
        'angulartics', 'angulartics.google.analytics',
        'toaster', 'ngAnimate', 'ngFileUpload',
        'leaflet-directive',
        'SIGL.Services',
        'SIGL.Controllers',
        'WiM.Services', 'WiM.Event', 'wim_angular', 'angularResizable', 'isteven-multi-select'
    ])
        .config(config);
})(SIGL || (SIGL = {})); //end module 
//# sourceMappingURL=config.js.map
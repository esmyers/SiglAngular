//http://lgorithms.blogspot.com/2013/07/angularui-router-as-infrastructure-of.html
//http://www.funnyant.com/angularjs-ui-router/
var GroundWaterWatch;
(function (GroundWaterWatch) {
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
                        controller: "GroundWaterWatch.Controllers.MapController"
                    },
                    'sidebar': {
                        templateUrl: "Views/sidebarview.html",
                        controller: "GroundWaterWatch.Controllers.SidebarController"
                    },
                    'navbar': {
                        templateUrl: "Views/navigationview.html",
                        controller: "GroundWaterWatch.Controllers.NavbarController"
                    }
                }
            }); //end main state 
            this.$urlRouterProvider.otherwise('/');
            this.$locationProvider.html5Mode(true);
            //turns of angular-leaflet console spam
            this.$logProvider.debugEnabled(false);
        } //end constructor
        config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider'];
        return config;
    }()); //end class
    angular.module('SiglAngular', [
        'ui.router', 'ui.bootstrap', 'ui.checkbox',
        'mobile-angular-ui',
        'angulartics', 'angulartics.google.analytics',
        'toaster', 'ngAnimate', 'ngFileUpload',
        'leaflet-directive',
        'GroundWaterWatch.Services',
        'GroundWaterWatch.Controllers',
        'WiM.Services', 'WiM.Event', 'wim_angular', 'angularResizable'
    ])
        .config(config);
})(GroundWaterWatch || (GroundWaterWatch = {})); //end module 
//# sourceMappingURL=config.js.map
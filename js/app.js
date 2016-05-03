/**
 * Created by don on 4/30/16.
 */
(function(angular) {

    var myApp = angular.module('myApp', ["ui.router","ng-fastclick","sm.header","photo.swipe","ngMaps","ngAnimate","anim-in-out"]);

    myApp.config( function ($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");
        //Not set up the state
        $stateProvider

            .state('index', {
                url:'/',
                templateUrl: 'partials/main.html',
                controller: 'MainController'
            })
            .state('locationdetail', {
                url:'/location/:type/:id',
                templateUrl: 'partials/locationdetail.html',
                controller: 'LocationDetailController',
                params: {
                    locationItem: null
                }
            });
        // uiGmapGoogleMapApiProvider.configure({
        //     key: 'AIzaSyCveeJO26XfktN14zw1-HtqLxyu73b0nSE',
        //     v: '3.20', //defaults to latest 3.X anyhow
        //     libraries: 'weather,geometry,visualization'
        // });
    });
    

})(window.angular);


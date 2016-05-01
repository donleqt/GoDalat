/**
 * Created by don on 4/30/16.
 */
(function(angular) {

    var myApp = angular.module('myApp', ["ui.router","ng-fastclick"]);

    myApp.config( function ($stateProvider, $urlRouterProvider){

        // $urlRouterProvider.otherwise("/");
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
    });

})(window.angular);


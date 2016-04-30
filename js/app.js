/**
 * Created by don on 4/30/16.
 */
(function(angular) {

    var myApp = angular.module('myApp', ["ui.router"]);

    myApp.config( function ($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");
        //Not set up the state
        $stateProvider
            .state('index', {
                url:'/',
                templateUrl: 'partials/main.html',
                controller: 'MainController'
            });
    });

})(window.angular);


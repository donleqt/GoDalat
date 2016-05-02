/**
 * Created by don on 5/2/16.
 */
(function (angular) {

    var myApp = angular.module('myApp');
    myApp.controller('IndexController',['$scope','$state','$stateParams','$timeout', function ($scope,$state,$stateParams,$timeout) {
        $scope.slideMenu = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70,
            'touch':false
        });

       
        $scope.introDone = false;
        $scope.appDriven = {
            catName: "",
            backButton: false,
            previous: 'index',
            goBack: function () {
                $state.go(this.previous);
            }
        };
        $scope.windowSize = {
            w: window.innerWidth,
            h: window.innerHeight
        };

        $timeout(function () {
            $("#intro-text").addClass('bounceOut');
            $timeout(function () {
                $("#intro-text").remove();
                $scope.introDone =true;

            },500);
        },2000);

        $scope.$root.$on('$viewContentLoaded',
            function(event, viewConfig){

                $('header').removeClass('hide-header');
                $('#mainContent').scrollTop(0);
            });
    }]);
})(window.angular);
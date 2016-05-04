/**
 * Created by Don on 5/4/2016.
 */
(function(angular) {

    var myApp =  angular.module("myApp");

    myApp.controller("LocationController", ['$scope','$stateParams','$state', function ($scope,$stateParams,$state) {

        $scope.$parent.appDriven.catName = 'Địa điểm';
        $scope.$parent.appDriven.backButton = false;

        

    }]);


})(window.angular);


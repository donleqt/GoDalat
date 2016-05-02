/**
 * Created by Don on 5/1/2016.
 */
(function(angular) {

    var myApp =  angular.module("myApp");

    myApp.controller("LocationDetailController", ['$scope','$stateParams','$state', function ($scope,$stateParams,$state) {

        $scope.item = $stateParams.locationItem;
        $scope.$parent.appDriven.catName = $scope.item.name;
        $scope.$parent.appDriven.backButton = true;
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };


        
    }]);


})(window.angular);


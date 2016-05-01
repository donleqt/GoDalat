/**
 * Created by Don on 5/1/2016.
 */
(function(angular) {

    var myApp =  angular.module("myApp");

    myApp.controller("LocationDetailController", ['$scope','$stateParams','$state', function ($scope,$stateParams,$state) {

        $scope.item = $stateParams.locationItem;
        $scope.$root.appDriven.catName = $scope.item.name;
        $scope.$root.appDriven.backButton = true;
       
          
        
    }]);


})(window.angular);


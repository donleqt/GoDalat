/**
 * Created by Don on 5/1/2016.
 */
(function(angular) {

    var myApp =  angular.module("myApp");

    myApp.controller("LocationDetailController", ['$scope','$stateParams','$state', function ($scope,$stateParams,$state) {

        $scope.item = $stateParams.locationItem;
        $scope.$parent.appDriven.catName = $scope.item.name;
        $scope.$parent.appDriven.backButton = true;

        var geo = $scope.item.geo;
        $scope.map = {
            center: [geo.lat, geo.long],

            options: function() {
                return {
                    streetViewControl: false,
                    scrollwheel: false,
                    zoom: 16
                }
            }
        };

        $scope.marker = {
            position: [geo.lat, geo.long],
            decimals: 6,
            options: function() {
                return { draggable: false };
            }
        }

        
    }]);


})(window.angular);


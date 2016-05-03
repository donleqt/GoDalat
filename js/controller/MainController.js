/**
 * Created by don on 4/30/16.
 */
(function(angular) {

    var myApp =  angular.module("myApp");

    myApp.controller("MainController", ['$scope','$timeout','$state','$stateParams','$rootScope', function ($scope,$timeout,$state,$stateParams,$rootScope) {

        $scope.$parent.appDriven.backButton=false;
        $scope.$parent.appDriven.catName='Nổi bật';
        $scope.$parent.appDriven.previous='index';

        $scope.locations = [
            {
                name: 'Thung lũng tình yêu',
                type: '1',
                id: '1',
                geo: {
                    lat: 11.980296,
                    long: 108.450302
                },
                info: [
                    {
                        name: 'Địa chỉ',
                        content: '05 - 07 Mai Anh Đào. P8. TP. Đà Lạt'
                    },
                    {
                        name: 'Điện thoại',
                        content: '0633.821.448'
                    },
                    {
                        name: 'Vé vào cổng',
                        content: '40.000đ/ khách người lớn, 20.000đ/ khách trẻ nhỏ (tham khảo).'
                    }
                ],
                cover: 'img/location/thunglungty.jpg',
                description: 'Nằm cách trung tâm thành phố Đà Lạt khoảng 5km thung lũng tình yêu là một khu du lịch đầy thơ mộng luôn cuốn hút mọi du khách gần xa tới tham quan.',
                content: 'Nằm cách trung tâm thành phố Đà Lạt khoảng 5km thung lũng tình yêu là một khu du lịch đầy thơ mộng luôn cuốn hút mọi du khách gần xa tới tham quan.'
                        + 'Bao quanh thung lũng tình yêu là Hồ Đa Thiện và rừng thông quanh năm xanh ngắt một màu.'
            },
            {
                name: 'Cao đẳng sư phạm Đà Lạt',
                type: '1',
                id: '2',
                geo: {
                    lat: 11.946719,
                    long: 108.453123
                },
                cover: 'img/location/caodangsp.jpg',
                description: 'Cao đẳng Sư phạm Đà Lạt, thuộc phường 10, thành phố Đà Lạt, tỉnh Lâm Đồng. Ngôi trường được người Pháp thành lập năm 1927, do kiến trúc sư Moncet thiết kế và chỉ đạo xây dựng',
                content: 'Trường được người Pháp xây dựng năm 1927, toàn bộ ngôi trường này là một công trình kiến trúc độc đáo mang đậm dấu ấn cổ kính châu Âu nhưng cũng đồng thời kết hợp với nhiều chi tiết kiến trúc bản địa tạo nên sự hài hòa độc đáo'
                        + 'Với không gian thoáng đãng, trong lành ngôi trường cao đẳng này không chỉ là nơi lý tưởng để học tập, nghiên cứu mà còn là nơi thu hút tất cả các du khách. '
            },
            {
                name: 'Chùa Linh Phước',
                type: '1',
                id: '3',
                geo: {
                    lat: 11.944439,
                    long: 108.499796
                },
                cover: 'img/location/chuavechai.jpg',
                description: 'Chùa Linh Phước, còn được gọi là Chùa Ve Chai vì trong sân chùa có con rồng dài 49 m được làm bằng 12.000 vỏ chai bia. Chùa Linh Phước là một công trình kiến trúc khảm sành đặc sắc của thành phố Đà Lạt.',
                content: 'Chùa được xây dựng vào năm 1949, hoàn thành vào năm 1952. Chùa đã qua 4 đời trụ trì là: Hòa thượng Thích Minh Thể (1951 – 1954), Hòa thượng Thích An Hòa (1954 – 1956), Hòa thượng Thích Quảng Phát (1956 – 1959) và Hòa thượng Thích Minh Đức (1959 – 1985). Thượng tọa Thích Tâm Vị trụ trì từ năm 1985 đến nay.'
            }
        ];

        $scope.toDetail = function (item) {
            $state.go("locationdetail",{type:item.type,id:item.id,locationItem:item});

        };

    }]);


})(window.angular);


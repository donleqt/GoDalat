/**
 * Created by don on 4/11/16.
 */

(function (angular) {
    'use strict';

    var myApp = angular.module('photo.swipe',[]);
  
    // PhotoSwipe
    myApp.directive ('photoSwipeContainer', function () {
        return {
            restrict: 'A',
            templateUrl: function(el,attr) {
                return attr.photoSwipeContainer
            },
            scope: {
                caption: '=caption'
            },  
            link: function (scope) {

            }

        }
    });

    myApp.directive('photoClick',['$parse',function ($parse) {
        return {
            restrict: 'A',
            transclue: true,
            scope: {

              caption: '=photoCaption'

            },
            link: function (scope,el,attrs) {
              //  scope[attrs['photoCaption']]
                var src = attrs.photoClick;
                if (src == null || src == undefined || src =='')
                    return;

                el.bind('click',function () {
                    // scope.$root[attrs.captionContainer]=scope.caption;
                    var pswpElement = document.querySelectorAll('.pswp')[0];
                    var items = [
                        {
                            src: src,
                            w: 0,
                            h: 0,
                            title: ''
                        }
                    ];
                    var options = {
                        // history & focus options are disabled on CodePen
                        history: false,
                        focus: false,
                        showAnimationDuration: 0,
                        hideAnimationDuration: 200
                    };

                    if (window.photoViewer != null && window.photoViewer!=undefined)
                        window.gallery = null;
                    window.gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                    window.gallery.listen('gettingData', function(index, item) {
                        if (item.w < 1 || item.h < 1) { // unknown size
                            var img = new Image();
                            img.onload = function() { // will get size after load
                                item.w = this.width; // set image width
                                item.h = this.height; // set image height
                                gallery.invalidateCurrItems(); // reinit Items
                                gallery.updateSize(true); // reinit Items
                            };
                            img.src = item.src; // let's download image
                        }
                    });
                    window.gallery.init();
                });

            }
        }
    }]);
    
})(window.angular);

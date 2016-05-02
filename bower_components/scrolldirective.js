/**
 * Created by don on 5/2/16.
 */
(function (angular) {
    var myApp= angular.module('sm.header',[]);

    myApp.directive('smHeader',function () {
          return {
              restrict: 'A',
              link: function (scope,el,attrs) {

                  var lastScrollTop = 0;
                  var delta = 5;
                  var navbarHeight = el.outerHeight();
                  var scrollEl = $(attrs['smHeader']);
                  scrollEl.scroll(function (event) {
                      
                      var st = scrollEl.scrollTop();

                      // Make sure they scroll more than delta
                      if(Math.abs(lastScrollTop - st) <= delta)
                          return;

                      // If they scrolled down and are past the navbar, add class .nav-up.
                      // This is necessary so you never see what is "behind" the navbar.
                      if (st > lastScrollTop && st > navbarHeight){
                          // Scroll Down
                          el.addClass('hide-header');
                      } else {
                          // Scroll Up
                          if(st + $(window).height() < $(document).height()) {
                              el.removeClass('hide-header');
                          }
                          el.removeClass('hide-header');
                      }

                      lastScrollTop = st;
                  });
              }
          }  
                
    });

})(window.angular);
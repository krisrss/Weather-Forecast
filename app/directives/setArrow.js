(function(){
    "use strict";

    angular.module("WeatherApp").directive('hideImage', hideImage);

    function hideImage() {
        var linkFn;
        linkFn = function (scope, element, attrs) {
            
            scope.setArrow = function () {
                angular.element('.panel-title').addClass('HIDERINO');

                var selectArrow = element.children();
                var checkCollapsed = element.parent().next().hasClass("show");

                if(checkCollapsed === true){
                    selectArrow.removeClass("arrow-up");
                    selectArrow.addClass("arrow-down");
                }
                else{
                    selectArrow.removeClass("arrow-down");
                    selectArrow.addClass("arrow-up");
                }


            }

        }

        return {
            restrict: 'C',
            link: linkFn
        }
    };

}());
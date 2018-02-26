(function(){
    "use strict";

    angular.module("WeatherApp").directive('setArrowPossition', setArrowPossition);

    function setArrowPossition() {
        var linkFn;
        linkFn = function (scope, element, attrs) {
            
            scope.setArrow = function () {
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
(function(){
    "use strict";

    angular.module("WeatherApp").directive('setWindDir', setWindDir);


    function setWindDir() {
        var linkFn;
        linkFn = function (scope, element, attrs) {
            scope.setWind = function (direction) {

                function setArrowSide(side,title){
                    angular.element('.setWindDir').children().addClass(side).attr("title",title);   
                }

                if((direction > 337.5 && direction <= 360) || direction <= 22.5){
                    setArrowSide("rotated-n","North");
                }
                else if(direction > 22.5 && direction <= 67.5){
                    setArrowSide("rotated-ne","North East");
                }
                else if(direction > 67.5 && direction <= 112.5){
                    setArrowSide("rotated-e","East");
                }
                else if(direction > 112.5 && direction <= 157.5){
                    setArrowSide("rotated-se","South East");
                }

                else if(direction > 157.5 && direction <= 202.5){
                    setArrowSide("rotated-s","South");
                }
                else if(direction > 202.5 && direction <= 247.5){
                    setArrowSide("rotated-sw","South West");
                }
                else if(direction > 247.5 && direction <= 292.5){
                    setArrowSide("rotated-w","West");
                }

                else if(direction > 292.5 && direction <= 337.5){
                    setArrowSide("rotated-nw","North West");
                }
            }
            
        }


        return {
            restrict: 'C',
            link: linkFn
        }
    }

}());
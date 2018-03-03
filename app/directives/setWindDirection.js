(function () {
    "use strict";

    angular.module("WeatherApp").directive('setWindDir', setWindDir);


    function setWindDir() {
        var linkFn;
        linkFn = function (scope, element, attrs) {
            scope.setDirection = "";
            scope.setWind = function (direction) {

                if ((direction > 337.5 && direction <= 360) || direction <= 22.5) {
                    scope.setDirection = "N";
                    return "rotated-n";
                }
                else if (direction > 22.5 && direction <= 67.5) {
                    scope.setDirection = "NE";
                    return "rotated-ne";
                }
                else if (direction > 67.5 && direction <= 112.5) {
                    scope.setDirection = "E";
                    return "rotated-e";
                }
                else if (direction > 112.5 && direction <= 157.5) {
                    scope.setDirection = "SE";
                    return "rotated-se";
                }
                else if (direction > 157.5 && direction <= 202.5) {
                    scope.setDirection = "S";
                    return "rotated-s";
                }
                else if (direction > 202.5 && direction <= 247.5) {
                    scope.setDirection = "SW";
                    return "rotated-sw";
                }
                else if (direction > 247.5 && direction <= 292.5) {
                    scope.setDirection = "W";
                    return "rotated-w";
                }
                else if (direction > 292.5 && direction <= 337.5) {
                    scope.setDirection = "NW";
                    return "rotated-nw";
                }
            }

        }


        return {
            restrict: 'C',
            link: linkFn
        }
    }

}());
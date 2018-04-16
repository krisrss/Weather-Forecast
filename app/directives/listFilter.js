(function(){
    "use strict";

    angular.module("WeatherApp").directive('listFilter', listFilter);

    function listFilter($filter) {
        var linkFn;
        linkFn = function (scope, element, attrs) {

            scope.filterData = function (data) {
                var forecastTime = $filter('date')(data.dt * 1000,'HH:mm:ss');
                return (forecastTime === '00:00:00' || forecastTime === '06:00:00' || forecastTime === '12:00:00'||  forecastTime === '21:00:00'  );
            };
        
            scope.setDayPrefix = function(time){
                switch(time) {
                    case "00:00:00":
                        return "Night";
                        break;
                    case "06:00:00":
                        return "Morning";
                        break;
                    case "12:00:00":
                        return "Day";
                        break;
                    case "21:00:00":
                        return "Evening";
                        break;
                    default:
                    return "Wrong Time";
                };
            };
        };

        return {
            restrict: 'C',
            link: linkFn
        }

    };


}());
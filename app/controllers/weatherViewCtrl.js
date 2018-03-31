(function(){

    "use strict";   

    angular.module("WeatherApp").controller("WeatherViewCtrl", weatherViewCtrl);

    function weatherViewCtrl(getNowWeather,getForecastList, getImage, $stateParams, $filter) {
        var vm = this;

        vm.weatherData = getNowWeather;
        vm.forecastData = getForecastList;


        vm.setImage = function(weatherCode){
            return  getImage.weatherImg(weatherCode)
        }

        vm.filterData = function (data) {
           var forecastTime = $filter('date')(data.dt * 1000,'HH:mm:ss');
           return (forecastTime === '00:00:00' || forecastTime === '06:00:00' || forecastTime === '12:00:00'||  forecastTime === '21:00:00'  );
        };

        //Set alias for day period
        vm.setDayPrefix = function(time){
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

}());
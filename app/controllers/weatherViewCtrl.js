(function(){

    "use strict";   

    angular.module("WeatherApp").controller("WeatherViewCtrl", weatherViewCtrl);

    function weatherViewCtrl(getNowWeather,getForecastList, getImage) {
        var vm = this;

        vm.weatherData = getNowWeather;
        vm.forecastData = getForecastList;


        vm.setImage = function(weatherCode){
            return  getImage.weatherImg(weatherCode)
        }

    };

}());
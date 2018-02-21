(function(){

    "use strict";   

    angular.module("WeatherApp").controller("WeatherViewCtrl", weatherViewCtrl);

    function weatherViewCtrl(getData, getImage) {

        var vm = this;


        vm.setImage = function(weatherCode){
            return  getImage.weatherImg(weatherCode)
        }
        
        // Retrives data from API
        getData.currentWeather()
            .then(function(data) {
                vm.weatherData = data;
            }
        );
        
        getData.forecastWeather()
            .then(function(data) {
                vm.forecastData = data;
            }
        );
        
    };

}());
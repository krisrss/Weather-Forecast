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




        vm.filterData = function (data) {
            var forecastDate = data.dt_txt + '';
            var splitTime = forecastDate.split(" ");
            var forecastTime = splitTime[1].slice(0, -3);
            return (forecastTime === '00:00' || forecastTime === '06:00' || forecastTime === '12:00' || forecastTime === '18:00' );
        }
    };

}());
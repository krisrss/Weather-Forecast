(function(){

    "use strict";   

    angular.module("WeatherApp").controller("WeatherViewCtrl", weatherViewCtrl);

    function weatherViewCtrl(getData) {

        var vm = this;
        
        // Retrives data from API
        getData.currentWeather()
            .then(function(data) {
                vm.weatherData = data;
            }
        );
    };

}());
(function(){

    "use strict";   

    var getData = function($http) {

        var currentWeather = function(latValue,lngValue) {
            return $http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + latValue + "&lon=" + lngValue + "&units=metric&appid=4a3e30b2283e445fc4c685a6a02916cd")
                .then(function(response){
                    return response.data;
                })
        };

        var forecastWeather = function(latValue,lngValue){
            return $http.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + latValue + "&lon=" + lngValue + "&units=metric&appid=4a3e30b2283e445fc4c685a6a02916cd")
                .then(function(response){
                    return response.data;
                })
        };


        return {
            currentWeather: currentWeather,
            forecastWeather: forecastWeather

        }

    };
    
    angular.module("WeatherApp").factory("getData", getData);

}());
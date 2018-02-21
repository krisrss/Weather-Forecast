(function(){

    "use strict";   

    var getData = function($http) {

        //NOTE : for testing purposes, displays only data for London
        var currentWeather = function() {
            return $http.get("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=4a3e30b2283e445fc4c685a6a02916cd")
                .then(function(response){
                    return response.data;
                })
        };

        return {
            currentWeather: currentWeather
        }

    };
    
    angular.module("WeatherApp").factory("getData", getData);

}());
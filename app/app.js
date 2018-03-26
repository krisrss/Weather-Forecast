(function(){
    "use strict";   
    var weatherApp = angular.module("WeatherApp", ["angular.filter","ui.router"]);


    weatherApp.config(["$stateProvider","$urlRouterProvider",
        function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");

            $stateProvider
            .state("weatherView",{
                url: "/weather/:lat/:lng'",
                templateUrl: "app/weatherView.html",
                controller : "WeatherViewCtrl as vm",

                resolve : {
                    getNowWeather: function(getData, $stateParams){
                        var latValue = $stateParams.lat;
                        var lngValue = $stateParams.lng;

                        return getData.currentWeather(latValue,lngValue);

                    },


                    getForecastList: function(getData, $stateParams){
                        var latValue = $stateParams.lat;
                        var lngValue = $stateParams.lng;

                        return getData.forecastWeather(latValue,lngValue);


                    }

                }
            })
        }
    ]); 

}());


(function () {
    "use strict";

    angular.module("WeatherApp").directive('searchBar', searchBar);


    function searchBar($state) {
        var linkFn;

        linkFn = function (scope, element, attrs) {

            var placeSearch, autocomplete, geocoder;

            //Get autocomplete data, for cities that matches a keyword
            scope.initAutocomplete = function () {
                geocoder = new google.maps.Geocoder();
                autocomplete = new google.maps.places.Autocomplete(
                    (document.getElementById('searchTextField')), {
                        types: ['(cities)'],
                    });

                autocomplete.addListener('place_changed', fillInAddress);
            }


            function fillInAddress() {
                var place = autocomplete.getPlace();
                codeAddress(document.getElementById('searchTextField').value);
            }


            //Retrive lng/lat of selected city
            function codeAddress(address) {
                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == 'OK') {
                        // alert(results[0].geometry.location);
                        
                        $state.go('weatherView', {
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        });

                    } else {
                        alert('Geocode was not successful: ' + status);
                    }
                });
            }

            scope.initAutocomplete();
        }



        return {
            restrict: 'C',
            link: linkFn
        }
    }

}());
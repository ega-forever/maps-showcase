angular.module('places', [])
    .controller('placeListCtrl', function ($http, shareEventService) {

        var _this = this;
        _this.data = [];

        shareEventService.getMapUpdateEvent(function (s, a) {

            $http({
                method: 'GET',
                url: '/get-yelp',
                params: {lat: a.lat, lng: a.lng}
            }).then(function successCallback(response) {
                console.log(response.data);
                _this.data = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        })

    });

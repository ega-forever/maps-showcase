/**
 *@controller google maps controller
 * @inject shareEventService to handle map touch event through factory's scope
 */
angular.module('maps', [])
.controller('mapCtrl', function(shareEventService){
        var _this = this;

        var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 55, lng: 55},
                zoom: 12
            });


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(pos);
            }, function() { });
        } else {
            alert('no geolocation support');
        }


        map.addListener('click', function() {
            shareEventService.triggerMapUpdateEvent({lat: map.center.lat(), lng: map.center.lng()});
        });

    });

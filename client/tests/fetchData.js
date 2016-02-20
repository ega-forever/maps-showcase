/**
 * @test jasmine unit
 * checking for request
 */
describe('Controller: public/controllers/placeListCtrl', function () {

    var data = null;
    var $http = angular.injector(["ng"]).get("$http");


    beforeEach(function (done) {

        $http({
            method: 'GET',
            url: 'http://localhost:9000/get-yelp',
            params: {lat: "50.56629629950512", lng: "9.518283918750074"}
        }).then(function successCallback(response) {
            data = response.data;
            done();
        }, function errorCallback(response) {
            console.log(response);
            done();
        });

    });


    it('fetch data', function () {
        expect(Array.isArray(data)).toBe(true);
    });



});
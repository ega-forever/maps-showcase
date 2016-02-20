/**
 *
 * @test jasmine unit
 * check yelp api connector and backend connection
 */
var fetchService = require("../../../services/fetchService.js");
var request = require("request");


    describe("fetch data from yelp", function() {
        it("returns array from yelp connector", function(done) {
            fetchService.fetch("50.56629629950512", "9.518283918750074").then(function(d){
                expect(Array.isArray(d)).toBe(true);
                done();

            });
        });

        it("return valid request status 200", function(done) {
            request.get("http://localhost:9000/get-yelp?lat=50.56629629950512&lng=9.518283918750074", function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

    });
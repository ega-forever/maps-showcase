var Yelp = require('yelp');
var yelpConf = require('../conf/yelpConf.js');
var yelp = new Yelp(yelpConf);
var q = require('q');
var place = require('../models/place.js');
var _ = require('lodash');
/**
 *
 * @param lat - latitude
 * @param lng - longitude
 * @returns {*|promise}
 */

module.exports.fetch = function (lat, lng) {
    var deferred = q.defer();
    yelp.search({term: 'food', ll: lat + ',' + lng})
        .then(function (data) {
            var s = _.chain(data.businesses)
                .take(5) /** take first 5 records **/
                .map(function(d){return _.pick(d, _.keys(place.place));}) /** reduce data by described model**/
                .value();
            deferred.resolve(s);
        })
        .catch(function (err) {
            console.error(err);
            deferred.resolve({});
        });
    return deferred.promise;
};
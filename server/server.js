/**
 *
 * @module entry point
 */

var fetchService = require('./services/fetchService');
var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.get('/get-yelp', function(req, res){
    fetchService.fetch(req.query.lat, req.query.lng).then(function(a){
        res.send(a);
    })
});


app.set('port', process.env.PORT || 9000);

app.listen(app.get('port'), function(){
    console.log('started listening...');
});
var https = require("https");

var username = "e371d3991e8c9382566da9024295975b";
var password = "1cd8736e5f80c851b1284340880a31c6";
var auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

var request = https.request({
    method: "GET",
    host: "api.intrinio.com",
    path: "/companies?ticker=AAPL",
    headers: {
        "Authorization": auth
    }
}, function(response) {
    var json = "";
    response.on('data', function (chunk) {
        json += chunk;
    });
    response.on('end', function() {
        var company = JSON.parse(json);
        console.log(company);
    });
});

request.end();
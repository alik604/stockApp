var company;

const express = require('express');
const path = require('path');
const bp = require('body-parser');
app = express();
app.set('view engine', 'ejs');
//global Vars
app.use(function (req, res, next) {
    res.locals.errors = null;
    res.locals.theCurrentSym = null; //TODO
    next();
});

// file is included here:
//eval(fs.readFileSync('utilJSfile') + '');
//https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
//var t = require('./utilJSfile');
//console.log(t.sum(1, 3));
//----------------------------------------

var HTMLinjectForData = "<ul>"; //TODO unused
var https = require("https");

var username = "e371d3991e8c9382566da9024295975b";
var password = "1cd8736e5f80c851b1284340880a31c6";
var auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

var updateData = function (stockSymbol) {
    var request = https.request({
        method: "GET",
        host: "api.intrinio.com",
        path: "/prices?identifier=" + stockSymbol + "&start_date=2018-05-12&end_date=2018-05-16&frequency=daily&sort_order=des",
        /*companies?ticker=AAPL  ||||||  data_point?ticker=AAPL&item=marketcap */
        headers: {
            "Authorization": auth
        }
    }, function (response) {
        var json = "";
        response.on('data', function (chunk) {
            json += chunk;
        });
        response.on('end', function () {
            company = JSON.parse(json);
            console.log(company);
            console.log("-----------------------------------");

            /*   for (var key in company.data) {
                   console.log("on " + company.data[key].date + " " + stockSymbol + " closed at: $" + company.data[key].close);
                   HTMLinjectForData += "<li>";
                   HTMLinjectForData += "on " + company.data[key].date + " " + stockSymbol + " closed at: $" + company.data[key].close;
                   HTMLinjectForData += "</li>";
               }
               HTMLinjectForData += " </ul>";
       */
        });
    });

    request.end();
    return company;
}

company = updateData("AAPL");
//----------------------------------
//guide https://www.youtube.com/watch?v=gnsO8-xJ8rs
//51:00 for mongoDB tut

app.set('views', path.join(__dirname, 'views'));
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));


app.get('/', function (req, res) {
    company = updateData("AAPL");
    setTimeout(function () {
        res.status(200).send( {
            MyOBJ: company.data
        });
    }, 1000);


});

app.get('/add', function (req, res) {

    company = updateData("AAPL");



    setTimeout(function () {
        res.status(200).send( {
            MyOBJ: company.data
        });
    }, 1000);

});


app.listen(3001); //main

//
var people = updateData("MSFT");
module.exports = function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/json'
    });
    res.write(JSON.stringify(people));
    res.end();
};


//


/*var https = require("https");


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
}, function (response) {
    var json = "";
    response.on('data', function (chunk) {
        json += chunk;
    });
    response.on('end', function () {
        var company = JSON.parse(json);
        console.log(company);
    });
});

request.end();
*/
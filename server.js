//https://mlab.com/databases/thisone/collections/users


var company;


const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

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

var https = require("https");
var request = require("request");
const axios = require('axios');

var dataWithAxios;

function getDataWithAxios(str) {

    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + str + "&outputsize=compact&apikey=ZYE987WC2KYKC29H";
    axios.get(url)
        .then((response) => {
            dataWithAxios = response.data;
            // console.log(x);

        }).catch((e) => {
        console.log(e.message);
    });
};

function getData(str) {
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + str + "&outputsize=compact&apikey=ZYE987WC2KYKC29H";
    var b = "null...";
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            //  console.log(body); // Print the json response

            b = body;
        }
    });
    return b;
};

function updateData(stockSymbol) {

    var req = https.request({
        method: "GET",
        host: "www.alphavantage.co",
        path: "/query?function=TIME_SERIES_MONTHLY&symbol=" + stockSymbol + "&apikey=ZYE987WC2KYKC29H",
        headers: {}
    }, function (response) {

        var json = "";
        response.on('data', function (chunk) {
            json += chunk;
        });
        response.on('end', function () {
            company = JSON.parse(json);
            //console.log(company);
            //console.log("-----------------------------------");
        });//end
    });//req

    request.end();
    return company;
};


// ----------------------------------
app.set('views', path.join(__dirname, 'views'));
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

// TODO

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log("FML... " + err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


//--------------
app.get('/', function (req, res) {
    getDataWithAxios("AAPL");

    setTimeout(function () {
        res.json(dataWithAxios);
        console.log(dataWithAxios);
    }, 1000);


});

app.get('/MSFT', function (req, res) {
    getDataWithAxios("MSFT");

    setTimeout(function () {
        res.json(dataWithAxios);
        console.log(dataWithAxios);
    }, 1000);

});
app.get(':id', function (req, res) {

    getDataWithAxios(req.params.id);
    setTimeout(function () {
        res.json(dataWithAxios);
        console.log(dataWithAxios);
    }, 1000);
});


// getDataWithAxios("AAPL");
// setTimeout(function () {
//     console.log(dataWithAxios);
// }, 1000);

app.listen(3001); //main


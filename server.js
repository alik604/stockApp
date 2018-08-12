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

const axios = require('axios');

var dataWithAxios;
var comWithAxios;

function getDataWithAxios(str) {
    console.log("dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss " + str)
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + str + "&outputsize=compact&apikey=ZYE987WC2KYKC29H";
    axios.get(url)
        .then((response) => {
            dataWithAxios = response.data;
            // console.log(x);

        }).catch((e) => {
        console.log(e.message);
    }).finally(() => {

    });
};


function getCompanyWithAxios(str) {

    var url = "https://api.iextrading.com/1.0/stock/" + str + "/company";
    axios.get(url)
        .then((response) => {
            comWithAxios = response.data;
            //  console.log(comWithAxios);

        }).catch((e) => {
        console.log(e.message);
    });

};


// ----------------------------------

app.get('/:id', function (req, res) {
    dataWithAxios = "";
    getDataWithAxios(req.params.id);

    setTimeout(function () {
        console.log("req.params.id, is:", req.params.id);
        console.log("req.params.id,  return is:", dataWithAxios);
        res.json(dataWithAxios);
    }, 1000);
});

app.get('/MSFT/company', function (req, res) {
    comWithAxios = "";
    getCompanyWithAxios("msft");

    setTimeout(function () {
        res.json(comWithAxios);
    }, 1000);
});

app.get('/:ii/:id', function (req, res) { //TODO fix
    comWithAxios = "";
    getCompanyWithAxios(req.params.id);

    setTimeout(function () {
        res.json(comWithAxios);
    }, 1000);
});


app.listen(3001); //main


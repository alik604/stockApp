//https://mlab.com/databases/thisone/collections/users
var company;

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bp = require('body-parser');

const app = express();
const axios = require('axios');
const path = require('path');

const StatsAndSummaryModel = require('./models/StatsAndSummary');
const watchItemModel = require('./models/watchItem');
/**
 * watchItemModel's  _id ants a  mongoose.Types.ObjectId(), NOT A OBJECT
 */

const users = require('./routes/api/users'); //TODO remove this sameple code
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log("FML a mongo error... " + err));

//app.set('view engine', 'ejs'); //TODO remove

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//TODO WTF is this needed?
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
//TODO WTF is this needed?
app.set('views', path.join(__dirname, 'views'));
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
//app.use('/api/users', users);
//app.use('/api/profile', profile);
//app.use('/api/posts', posts);


/** RESTFUL API end Points below ------------------------------------------------
 *
 */

app.get('/getDataForGraph/:timeScale/:id', function (req, res) {

    /**intraday,daily,weekly,monthly,
     *
     *
     *
     *
     *
     */

    var timeScale = "";
    if (req.params.timeScale == "i1")  //5 days / 1 week
        timeScale = "TIME_SERIES_INTRADAY&interval=1min&outputsize=full"; //TODO stop being lazy
    if (req.params.timeScale == "i5")
        timeScale = "TIME_SERIES_INTRADAY&interval=5min&outputsize=full";
    if (req.params.timeScale == "i15")
        timeScale = "TIME_SERIES_INTRADAY&interval=15min&outputsize=full";
    if (req.params.timeScale == "d30")
        timeScale = "TIME_SERIES_INTRADAY&interval=30min&outputsize=full";
    if (req.params.timeScale == "d90")
        timeScale = "TIME_SERIES_DAILY&outputsize=compact";
    if (req.params.timeScale == "d180")
        timeScale = "TIME_SERIES_DAILY&outputsize=full";

    if (req.params.timeScale == "w")
        timeScale = "TIME_SERIES_WEEKLY";

    if (req.params.timeScale == "m")
        timeScale = "TIME_SERIES_MONTHLY";


    var url = "https://www.alphavantage.co/query?function=" + timeScale + "&symbol=" + req.params.id + "&apikey=ZYE987WC2KYKC29H";
    //  console.log(req.params.timeScale + " : " + url);
    axios.get(url)
        .then((response) => {
            res.json(response.data);
        }).catch((e) => {
        console.log(e.message);
    });
});

app.get('/getCompanyData/:id', function (req, res) {

    var url = "https://api.iextrading.com/1.0/stock/" + req.params.id + "/company";
    axios.get(url)
        .then((response) => {
            res.json(response.data);
        }).catch((e) => {
        console.log(e.message);
    });

});

/** DB related shit --------------------------------------------------------------------------------------------------------------------------------------
 *
 */

var updateStatAndSum = function () {
    /*
        //model is called StatsAndSummaryModel
        const statAndSum = new StatsAndSummaryModel({
            _id: new mongoose.Types.ObjectId(),
            startingVal: 100000,
            currentVal: 110000,
            percentageGain: (110000 / 100000),
            numbOfBuys: 10,
            numbOfSells: 8
            // ,startDate: new Date()
        });

        statAndSum.save().then(res => {
            console.log("res: " + res);
            console.log("saved");
        }).catch(err => {
            console.log(err)
        });
    */
};
app.get('/getStatAndSum', (req, res, next) => {

    StatsAndSummaryModel.find().exec().then(docs => {
        // if (docs.length <= 0) { //TODO needed?
        //     docs = {isEmpty: true};
        // } else {

        for (var i = 0; i < docs.length; i++) {

            console.log(docs);
        }
        res.status(200).json({docs}); //TODO
    });


});

app.post('/addToWatchList', function (req, res, next) { //TODO WTF is next for; how to use res effectively?


    // console.log(req.body.sym);
    // console.log("buy?: " + req.body.buy);
    // console.log("sell?: " + req.body.sell);
    // console.log(req.body.quantity);
    // console.log(req.body.typeOfOrder);
    // console.log(req.body.priceOnBuy);


    var url = "https://api.iextrading.com/1.0/stock/" + req.body.sym + "/price";
    axios.get(url)
        .then((response) => {


            const watchItem = new watchItemModel({
                _id: new mongoose.Types.ObjectId(),
                sym: req.body.sym,
                buy: req.body.buy,
                sell: req.body.sell,
                quantity: req.body.quantity,
                typeOfOrder: req.body.typeOfOrder,
                priceOnBuy: response.data,
                priceNow: req.body.priceNow,
                dataOfLastUpDate: new Date() //TODO worng time zone
            });

            watchItem.save().then(res => {
                    // console.log(res)
                    console.log("saved");
                }
            ).catch(err => {
                console.log(err)
            });


        })
        .catch((e) => {
            console.log(e.message);
        });


    //model is called watchItemModel


    // var id = "5b763bec473cb9081403a8e5";
    // watchItemModel.findById(id).exec().then(doc => {
    //     console.log(doc);
    // }).catch(e => {
    //     console.log("err in find item with ID: ",e);
    // });

    //res.send({isAllGud: true}); //TODO
    res.status(200).json({isAllGud: true}); //TODO

    res.end();

});//end of post('/AddToWatchList')


app.get('/getAllWatchListData', function (req, res) {
    //https://stackoverflow.com/questions/13813463/how-to-avoid-access-mutable-variable-from-closure

    //model is called watchItemModel
    //https://www.youtube.com/watch?v=WDrU305J1yw 24mins mark
    watchItemModel.find().exec().then(docs => {
        // if (docs.length <= 0) { //TODO needed?
        //     docs = {isEmpty: true};
        // } else {

        for (var i = 0; i < docs.length; i++) {

            (function () {
                const d = docs[i];
                var url = "https://api.iextrading.com/1.0/stock/" + d.sym + "/price";
                axios.get(url)
                    .then((response) => {
                        // var query = {priceNow: response.data};
                        // d.priceNow = response.data;
                        // watchItemModel.findOneAndUpdate(query, d, {upsert: true}, function (err, doc) {

                        var query = {priceNow: response.data};
                        // d.priceNow = response.data;
                        //     console.log(d.sym +" : "+ d._id);

                        watchItemModel.findOneAndUpdate({_id: d._id}, {$set: {priceNow: response.data}}, {upsert: true}, function (err, doc) {

                            if (err) {
                                console.log("err: " + err);
                            }

                        });
                    })
                    .catch((e) => {
                        console.log("err in /getAllWatchListData: " + e.message);
                    });
            })();
        }
        //   console.log("--- docs: ---------------", docs);
        res.status(200).json(docs);

    }).catch(e => {
        // console.log(e);
        res.status(500).json({
            error: e
        });
    });
});

app.post("/sell", (req, res) => { //TODO FUBAR
    try {
        console.log(" it works!");
        console.log(req.body.id);

        //model is called watchItemModel

        watchItemModel.remove({_id: req.body.id}).exec().then(function (result) {
            console.log("result: " + result);
            console.log("deleted id: " + req.body.id);
            res.status(200).json({result});
        }).catch(err => {
            res.status(500).json({err}); // yay! es6
            console.log("deleting error " + err);
        });
    } catch (e) {

    }
});


app.post('/updatePriceFor/:id', function (req, res) { //TODO
    console.log(" it works!" + req.body);
    console.log(req.body.id);

    // // dataWithAxios = "";
    // getDataWithAxios(req.params.id);
    // setTimeout(function () {
    //     //  console.log("req.params.id, is:", req.params.id);
    //     //  console.log("req.params.id,  return is:", dataWithAxios);
    //     res.json(dataWithAxios);
    // }, 1000);
});

app.listen(3001); //main
//https://mlab.com/databases/thisone/collections/users
var company;

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bp = require('body-parser');

const path = require('path');
var app = express();

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


//--------------

const axios = require('axios'); //TODO move to top and make this look good

var dataWithAxios;
var comWithAxios;

function getDataWithAxios(str) {
    //   console.log("------------------------------------------------------------------------------------------- " + str)
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + str + "&outputsize=compact&apikey=ZYE987WC2KYKC29H";
    axios.get(url)
        .then((response) => {
            dataWithAxios = response.data;
            // console.log(x);
        }).catch((e) => {
        console.log(e.message);
    })
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
    // dataWithAxios = "";
    getDataWithAxios(req.params.id);
    setTimeout(function () {
        //  console.log("req.params.id, is:", req.params.id);
        //  console.log("req.params.id,  return is:", dataWithAxios);
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

// app.get('/:ii/:id', function (req, res) { //TODO fix
//     comWithAxios = "";
//     getCompanyWithAxios(req.params.id);
//
//     setTimeout(function () {
//         res.json(comWithAxios);
//     }, 1000);
// });

/** DB related shit --------------------------------------------------------------------------------------------------------------------------------------
 *
 */


app.post('/AddToWatchList', function (req, res, next) { //TODO WTF is next for; how to use res effectively?


    console.log(req.body.sym);
    console.log("buy?: " + req.body.buy);
    console.log("sell?: " + req.body.sell);
    console.log(req.body.quantity);
    console.log(req.body.typeOfOrder);
    console.log(req.body.price);

    //model is called watchItemModel

    const watchItem = new watchItemModel({
        _id: new mongoose.Types.ObjectId(),
        sym: req.body.sym,
        buy: req.body.buy,
        sell: req.body.sell,
        quantity: req.body.quantity,
        typeOfOrder: req.body.typeOfOrder,
        price: req.body.price
    });

    watchItem.save().then(res => {
            // console.log(res)
            console.log("saved");
        }
    ).catch(err => {
        console.log(err)
    });

    // var id = "5b763bec473cb9081403a8e5";
    // watchItemModel.findById(id).exec().then(doc => {
    //     console.log(doc);
    // }).catch(e => {
    //     console.log("find item with ID: ",e);
    // });

    //res.send({isAllGud: true}); //TODO
    res.status(200).json({isAllGud: true}); //TODO

    res.end();

});//end of post('/AddToWatchList')


app.get('/getAllWatchListData/a', function (req, res) {
    //model is called watchItemModel
//https://www.youtube.com/watch?v=WDrU305J1yw 24mins mark
    watchItemModel.find().exec().then(docs => {
        if (docs.length <= 0) { //TODO needed?
            docs = {isEmpty: true};
        }
        //    console.log("------------------------", docs);
        res.status(200).json(docs);
    }).catch(e => {
        // console.log(e);
        // res.status(500).json({
        //     error: e
        // });
    });

});

app.delete("/sell/:id", (req, res, next) => {
    const id = req.params.id;
    //model is called watchItemModel

    watchItemModel.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({err}); // yay! es6
            console.log("deleting error " + err);
        });


});

app.listen(3001); //main
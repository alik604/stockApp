const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WatchSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,

    sym: {
        type: String,
        required: true
    },
    buy: {
        type: Boolean,
        required: false //TODO
    },
    sell: {
        type: Boolean,
        required: false //TODO
    },
    quantity: {
        type: Number,
        required: true
    },
    typeOfOrder: {
        type: String,
        required: false //TODO
    },
    priceOnBuy: {
        type: Number,
        required: false //TODO
    },
    priceNow: {
        type: Number,
        required: false //TODO
    },
    dataOfLastUpDate: {
        type: Date,
        required: false
    }
});

module.exports = WatchItem = mongoose.model('Watchlist', WatchSchema);


//
// sym: "AAPL",
//     buy: true,
//     sell: false,
//     quantity: "100",
//     typeOfOrder: "market price",
//     price: "123"
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
        required: true
    },
    sell: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    typeOfOrder: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
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
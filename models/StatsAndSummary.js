const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StatsAndSummarySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,

    startingVal: {
        type: Number,
        required: true
    },
    currentVal: {
        type: Number,
        required: true
    },
    percentageGain: {
        type: Number,
        required: true
    },
    numbOfBuys: {
        type: Number,
        required: true
    },
    numbOfSells: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    }
});

module.exports = StatsAndSummary = mongoose.model('StatsAndSummaryList', StatsAndSummarySchema);


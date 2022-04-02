const mongoose = require("mongoose");

const itemModel = mongoose.Schema({
    name:
    {
        type: String,
        require: true
    },
    details:
    {
        type: String,
        require: true
    },
    imageURL:
    {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = itemModel;
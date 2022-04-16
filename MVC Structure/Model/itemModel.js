const mongoose = require("mongoose");

const itemModel = mongoose.Schema({
 name: String,
 title:String,
 price: Number,
 img: String
});

module.exports = itemModel;
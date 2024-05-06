const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userID:String,
    author:String
});

module.exports = mongoose.model("Books",userSchema);
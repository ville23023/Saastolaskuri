const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        min:6,
        max:12,
        trim: true,
        unique: true
    },
    password:{
        type:String,
        require:true,
        min:8,
        max:16,
        trim:true
    }
});

module.exports = mongoose.model("user", userSchema);
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:5,
        maxlength:12,
        trim: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:16,
        trim:true
    },
    favoriteThing:{
        type: [String],
        required: true,
        validate: {
            validator: function(arr){
                return arr.length > 0;
            },
            message: "List atleast one thing"
        }
    }
});

//Salasanan bcryptaus 
userSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch (error){
        next(error);
    }
});

module.exports = mongoose.model("user", userSchema);
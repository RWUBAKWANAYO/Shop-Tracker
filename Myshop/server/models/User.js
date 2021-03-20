
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true,
        
    },
    admin:{
        type: Boolean
    }
})

mongoose.model("User", userSchema)
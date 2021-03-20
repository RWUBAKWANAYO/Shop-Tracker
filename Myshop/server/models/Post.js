
const mongoose = require ('mongoose')
const {ObjectId} = mongoose.Schema.Types
const { v4: uuidv4 } = require('uuid');
uuidv4();
const id = uuidv4 ;




const postSchema = new mongoose.Schema({

    id:{
        type:String,
        default:id,
        required:true,
        unique:true

    },
   
    createdAt:{
        type: Date,
        default: Date.now
      },
    title:{
        type:String,
        required:true
    },

    photo:{
        type:String,
        // required:false
    },
    quantity:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref: "User",
        
    }

})

mongoose.model("Post",postSchema)
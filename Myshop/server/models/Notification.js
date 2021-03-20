const mongoose = require ('mongoose')
const {ObjectId} = mongoose.Schema.Types


const notificationSchema = new mongoose.Schema({
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
    notifications:{
        type:Object,
        
    },
    postedBy:{
        type:ObjectId,
        ref: "User",
        
    }

})

mongoose.model("Notification",notificationSchema)
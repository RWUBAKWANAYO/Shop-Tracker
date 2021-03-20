const express =  require ('express');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const {MONGOURI} = require('./config/keys')

// ywakMI38yQ4Ji46G
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGOURI, {
            useNewUrlParser:true,
             useUnifiedTopology: true 
       })

// mongoose.connect('mongodb://localhost:/supervision', {
//         useNewUrlParser:true,
//         useUnifiedTopology: true 
//     })

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo db")
})
mongoose.connection.on('error',(error)=>{
    console.log("connecting error",error)
})

require('./models/User');
require('./models/Post');
require('./models/Notification');
require('./models/Agenda');



app.use(express.json())
app.use(cors())
app.use(require('./routes/Auth'));
app.use(require('./routes/post'));

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'))
    })
}



app.listen(PORT, ()=>{
    console.log('SERVER IS RUNNING ON PORT',PORT)
})


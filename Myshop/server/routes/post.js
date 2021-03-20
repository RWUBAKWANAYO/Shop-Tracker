const { Router } = require('express')
const express =  require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")
const Notification = mongoose.model("Notification")
const Agenda = mongoose.model("Agenda")


router.get('/allpost',(req,res)=>{
    Post.find().sort({"title": 1}) 
    .find()
    .populate("postedBy", "_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>console.log(err))
})

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,photo,quantity,amount,createdAt,id} = req.body
    if(!title || !quantity || !amount){
        res.status(401).json({error:"please add all field"}) 
    }   
        const post = new Post({
        id,
        createdAt,
        title,
        photo,
        quantity,
        amount,
        postedBy:req.user
    })

    post.save().then(result=>{
        res.json({post:result})
       
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost',requireLogin,(req,res)=>{
    
    Post.find({postedBy:req.user._id})
    .populate("postedBy", "_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.put('/updatepost/:title',requireLogin,(req,res)=>{
    Post.findOneAndUpdate( {title:req.body.title},{$set:{quantity: req.body.quantity}},{upsert:true},
        (error, result)=>{
            if(error){
                return res.status(403).json({error:"Not Updated"})
            }
            else{
                console.log(result)
                res.json(result)
            }
        } )
})


router.get('/allnotification',(req,res)=>{
    Notification.find().sort({"createdAt": -1}) 
    .find()
    .populate("postedBy", "_id name")
    .then(notification=>{
        res.json({notification})
    })
    .catch(err=>console.log(err))
})


router.post('/createnotification',requireLogin,(req,res)=>{
    
    const {title,photo,quantity,amount,createdAt} = req.body
    if(!title || !quantity || !amount){
        res.status(401).json({error:"please add all field"}) 
    }
        const notification = new Notification({
        createdAt,
        title,
        photo,
        quantity,
        amount
    })

    notification.save().then(result=>{
        res.json({notification:result})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get('/allagenda',(req,res)=>{
    Agenda.find().sort({"createdAt": -1}) 
    .find()
    .populate("postedBy", "_id name")
    .then(agenda=>{
        res.json({agenda})
    })
    .catch(err=>console.log(err))
})


router.post('/createagenda',requireLogin,(req,res)=>{
    
    const {id,createdAt,title,completed} = req.body
    if(!title){
        res.status(401).json({error:"please add all body"}) 
    }
        const agenda = new Agenda ({
            id,
            createdAt,
            title,
            completed:false,
            postedBy:req.user
        
    })

    agenda.save().then(result=>{
        res.json({agenda:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.delete('/deleteagenda/:id',requireLogin,(req,res)=>{
    Agenda.findOneAndRemove( {id:req.body.id},
        (error, result)=>{
            if(error){
                return res.status(403).json({error:"Not Deleted"})
            }
            else{
                console.log(result)
                res.json(result)
            }
        } )
})

router.put('/updateagenda/:id',requireLogin,(req,res)=>{
    Agenda.findOneAndUpdate( {id:req.body.id},{$set:{completed:req.body.completed}},{upsert:true},
        (error, result)=>{
            if(error){
                return res.status(403).json({error:"Not Updated"})
            }
            else{
                console.log(result)
                res.json(result)
            }
        } )
})







module.exports = router




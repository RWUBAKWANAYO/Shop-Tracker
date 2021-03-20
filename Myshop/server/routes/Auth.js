//Import every necessary files
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')



router.post('/signup',(req, res)=>{
    const {name, password,admin} = req.body
    if(!name || !password){
        return  res.status(402).json({error:"Please fill alL field"})}
    User.findOne({name: name})
    .then((savedUser)=>{
        if(savedUser){
            return  res.status(401).json({error:"User arleady exist"})}
            bcrypt.hash(password,2)
            .then(hashedpassword=>{
                const user = new User({
                    name,
                    password:hashedpassword,
                    admin
                })
            user.save()
            .then(user=>{
                res.json({message:'information saved successfuly'})
            })

            })
           
        .catch(err =>console.log(err))
    })
    .catch(err=>console.log(err))
})

router.post('/signin', (req, res)=>{
    const {name, password} = req.body
    if(!name || !password){
        return  res.status(402).json({error:"Please Fill all field"})
       }
       User.findOne({name: name})
       .then(savedUser=>{
            if(!savedUser){
            res.status(401).json({error:"Invalid name or password "})
    }
    bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id, }, JWT_SECRET)
                const {_id, name, admin } = savedUser
                res.json({token, user:_id, name,admin})
            }
            else{
                res.status(401).json({error:"Invalid name or password "})
            }
    })
    .catch(err => console.log(err))
})
.catch(err => console.log(err))
})



module.exports = router
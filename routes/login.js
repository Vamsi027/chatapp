const express=require('express')

const bodyParser=require('body-parser')
const router=express.Router();

router.use(bodyParser.urlencoded());

router.get('/',(req,res,next)=>{
    res.send('<form action="/login/" method="POST"><input type="text" name="username"><br><button type="submit">Login</button></form>')
});


router.post('/',(req,res,next)=>{
    console.log(req.body.username);
    var LocalStorage = require('node-localstorage').LocalStorage;
    var localStorage = new LocalStorage('./');
    localStorage.setItem("username",req.body.username);
    res.redirect('/chat')
});

module.exports=router;
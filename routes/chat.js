const express=require('express')
const fs=require('fs')
const bodyParser=require('body-parser')

const router=express.Router();
router.use(bodyParser.urlencoded());

router.get('/',(req,res,next)=>{
    fs.readFile('message.txt', 'utf8' , (err, data) => {
        if (err) {
          return
        }
    const datainFile=data;
    res.send(`<p>${datainFile}</p><form action="/chat" method="POST"><input type="text" name="message"><br><button type="submit">Send Message</button></form>`)
    })
});

router.post('/',(req,res,next)=>{
    var LocalStorage = require('node-localstorage').LocalStorage;
    var localStorage = new LocalStorage('./');
    username=localStorage.getItem("username")
    usermsg=req.body.message
    message=`${username}:-${usermsg}`
    console.log(message)
    fs.writeFile('message.txt',message,{flag:'a+'},err=>{})
    res.redirect('/chat')
});

module.exports=router;
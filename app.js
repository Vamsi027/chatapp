const express=require('express')


const loginRoute=require('./routes/login')
const chatRoute=require('./routes/chat')

const app=express();

app.use('/login',loginRoute)
app.use('/chat',chatRoute)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page never found</h1>')
})


app.listen(4000)
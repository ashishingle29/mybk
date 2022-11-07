const express = require('express');
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express();
const route = require("./routes/route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', route)

mongoose.connect("mongodb+srv://ashishingle:root@assignment.rkryykd.mongodb.net/Authorisation?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(()=>console.log("Mongoose : Ready To Boom💥")).catch((err)=>console.log(err))

app.listen(3000, ()=>{
    console.log("running on port", 3000)
})  
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Edureka',{useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err){
        console.log("success");
    }
    else{
        console.log("Error connecting to database");
    }
})

const Course = require('./courses.model')

const express = require("express")
const mongoose = require('mongoose')

const router = express.Router();
const CourseModel = mongoose.model('Course')
// const Course = require("../models/courses.model")
router.get('/list', (req,res) =>{
    // var course = new CourseModel();
    // course.courseName = "js23323"
    // course.save();
     
    CourseModel.find({courseName: 'js'},(err, docs)=>{
        if(!err){
            console.log(docs);
            res.render('list', { data: docs })
        }   
    })
    
})

module.exports = router;
const express = require('express');
const { courseController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/course/getallCourse
router.get('/getallCourse',(req,res) => {
    res.status(200).json({message:'all Course fetch'})
})


router.get('/getCourse',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addCourse',courseController.addCourses)


router.put('/updateCourse/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Course'})
})


router.delete('/deleteCourse/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Course'})
})

module.exports = router
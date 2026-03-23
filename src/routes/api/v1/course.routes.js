const express = require('express');
const { courseController } = require('../../../controller');
const upload = require('../../../middleware/upload');
const router = express.Router();


//http://localhost:8080/api/v1/course/getallCourse
router.get('/getallCourse',courseController.getallCourses)


router.get('/getCourse/:id',courseController.getCourses)


router.post('/addCourse',upload.single('course_img'),courseController.addCourses)


router.put('/updateCourse/:id',upload.single('course_img'),courseController.updateCourses)

router.put('/updateStatus/:id',courseController.updateStatus)

router.delete('/deleteCourse/:id',courseController.deleteCourses)

module.exports = router
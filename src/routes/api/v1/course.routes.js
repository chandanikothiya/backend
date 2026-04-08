const express = require('express');
const { courseController } = require('../../../controller');
const upload = require('../../../middleware/upload');
const router = express.Router();



//http://localhost:8080/api/v1/course/getallCourse
router.get('/getallCourse',courseController.getallCourses)


router.get('/getCourse/:id',courseController.getCourses)

//upload.array('course_img', 10)
router.post('/addCourse',upload.fields([{ name: 'course_img', maxCount: 10 }, { name: 'course_video', maxCount:1 }]),courseController.addCourses)

router.put('/updateCourse/:id',upload.fields([{ name: 'course_img', maxCount: 10 }, { name: 'course_video', maxCount:1 }]),courseController.updateCourses)

router.put('/updateStatus/:id',courseController.updateStatus)

router.delete('/deleteCourse/:id',courseController.deleteCourses)

module.exports = router
const courses = require("../models/course.model")
const fs = require("fs")

const getallCourses = async (req, res) => {
    try {

        const course = await courses.find()

        if (!course) {
            return res.status(400).json({ data: null, message: "course data not fetch" + error.message })
        }

        return res.status(200).json({ data: course, message: "course fetch succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at get all course" + error })
    }
}

const getCourses = async (req, res) => {
    try {

        const course = await courses.findById(req.params.id)

        if (!course) {
            return res.status(400).json({ data: null, message: "course data not fetch" + error.message })
        }

        return res.status(200).json({ data: course, message: "course fetch succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at get course" + error })
    }
}

const addCourses = async (req, res) => {
    // console.log(req.body)
    try {
        const course = await courses.create({...req.body,course_img:req.file.path})

        if (!course) {
            return res.status(400).json({ data: null, message: "course data not add" })
        }
        return res.status(200).json({ data: course, message: "course data add succesfully" })
    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at add course" + error.message })
    }
}

const updateCourses = async (req, res) => {
    try {

        const course = await courses.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        )

        if (!course) {
            return res.status(400).json({ data: null, message: "course not update" + error.message })
        }

        return res.status(200).json({ data: course, message: "course update succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at update course" + error })
    }
}

const deleteCourses = async (req, res) => {
    try {

        const course = await courses.findByIdAndDelete(req.params.id);
        fs.unlink(course.course_img, (error) => {
            console.log(error)
        })

        if (!course) {
            return res.status(400).json({ data: null, message: "course not delete" + error.message })
        }

        return res.status(200).json({ data: course, message: "course delete succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at delete course" + error })
    }
}

module.exports = {
    getallCourses,
    getCourses,
    addCourses,
    updateCourses,
    deleteCourses
}
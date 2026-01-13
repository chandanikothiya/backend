const courses = require("../models/course.model")


const getallCourses = (req, res) => {

}

const getCourses = (req, res) => {

}

const addCourses = async (req, res) => {
    // console.log(req.body)
    try {
        const course = await courses.create(req.body)

        if (!course) {
            return res.status(400).json({ data: null, message: "course data not add" })
        }
        return res.status(200).json({ data: course, message: "course data add succesfully" })
    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at add course" + error.message })
    }
}

const updateCourses = (req, res) => {

}

const deleteCourses = (req, res) => {

}

module.exports = {
    getallCourses,
    getCourses,
    addCourses,
    updateCourses,
    deleteCourses
}
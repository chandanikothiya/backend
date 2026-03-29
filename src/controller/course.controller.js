const courses = require("../models/course.model")
const { default: mongoose } = require("mongoose");
const fs = require("fs");
const { cloudinaryupload, cloudinarydelete } = require("../service/cloudinary");

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
    console.log(req.body)
    console.log("file", req.file)
    try {
        // // const insid = ObjectId(req.body.instructor_id);
        // if (typeof req.body.instructor_id === 'string' && /^[a-fA-F0-9]{24}$/.test(req.body.instructor_id)) {
        //     var insid = new mongoose.Types.ObjectId(id);
        //     console.log(insid)
        // }

        //    const course = await courses.create({ ...req.body, course_img: req.file.path, instructor_id: new mongoose.Types.ObjectId(req.body.instructor_id) })


        const obj = await cloudinaryupload(req.file.path, "course")

        const course = await courses.create({ ...req.body, course_img: { public_id: obj.public_id, url: obj.url } })

        if (!course) {
            return res.status(400).json({ success: true, data: null, message: "course data not add" })
        }
        return res.status(200).json({ data: course, message: "course data add succesfully" })
    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at add course" + error.message })
    }
}

const updateCourses = async (req, res) => {
    try {

        const coursedata = await courses.findById(req.params.id);

        let updatedata = { ...req.body, course_img: { public_id: coursedata.course_img.public_id, url: coursedata.course_img.url } }

        if (req.file) {
            // fs.unlink(coursedata.course_img, (error) => {
            //     console.log(error)
            // })

            await cloudinarydelete(categorydata.category_img.public_id);

            updatedata.course_img = req.file.path
        }

        const course = await courses.findByIdAndUpdate(
            req.params.id,
            updatedata,
            { new: true, runValidators: true }
        )

        if (!course) {
            return res.status(400).json({ data: null, message: "course not update" + error.message })
        }

        return res.status(200).json({ data: course, message: "course update succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at update course" + error })
    }
}

const updateStatus = async (req, res) => {
    try {

        const course = await courses.findById(req.params.id)

        if (!course) {
            return res.status(400).json({ success: false, data: null, message: "course not found" })
        }

        // const coursedata = await courses.findByIdAndUpdate(
        //     req.params.id,
        //     req.body,
        //     { new: true, runValidators: true }
        // )

        console.log("req.body.isactive", !req.body.isactive)
        course.isactive = !req.body.isactive
        await course.save();

        return res.status(200).json({ success: true, data: null, message: "course status update" })

    } catch (error) {
        return res.status(400).json({ success: false, data: null, message: "internal sever error" + error.message })

    }
}

const deleteCourses = async (req, res) => {
    console.log("deleteid", req.params.id)
    try {

        const course = await courses.findByIdAndDelete(req.params.id);

        await cloudinarydelete(course.course_img.public_id);

        if (!course) {
            return res.status(400).json({ data: null, message: "course not delete" + error.message })
        }

        // fs.unlink(course.course_img, (error) => {
        //     console.log(error)
        // })

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
    deleteCourses,
    updateStatus
}
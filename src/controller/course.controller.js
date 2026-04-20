const courses = require("../models/course.model")
const { default: mongoose } = require("mongoose");
const fs = require("fs");
const { cloudinaryupload, cloudinarydelete } = require("../service/cloudinary");

const getallCourses = async (req, res) => {
    // #swagger.tags = ['Coures']
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
    // #swagger.tags = ['Coures']
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
    // #swagger.tags = ['Coures']
    console.log(req.body)
    console.log("file", req.files)
    let course_images = [];
    let files = req.files
    try {

        //    const course = await courses.create({ ...req.body, course_img: req.file.path, instructor_id: new mongoose.Types.ObjectId(req.body.instructor_id) })
        if (files.course_img && files.course_img.length > 0) {
            for (let file of files.course_img) {
                const obj = await cloudinaryupload(file.path, "course");
                course_images.push({ public_id: obj.public_id, url: obj.url });
            }
        }

        const obj1 = await cloudinaryupload(files.course_video[0].path, "course_video");
        //demo_videos = { public_id: obj.public_id, url: obj.url }

        //const obj = await cloudinaryupload(req.file.path, "course")

        // const course = await courses.create({ ...req.body, course_img: { public_id: obj.public_id, url: obj.url } })
        const course = await courses.create({ ...req.body, course_img: course_images, course_video: { public_id: obj1.public_id, url: obj1.url } })

        if (!course) {
            return res.status(400).json({ success: true, data: null, message: "course data not add" })
        }
        return res.status(200).json({ data: course, message: "course data add succesfully" })
    } catch (error) {
        return res.status(500).json({ data: null, message: "internal server error at add course" + error.message })
    }
}

const updateCourses = async (req, res) => {

    // #swagger.tags = ['Coures']
    try {
        console.log("body", req.body, req.body.course_img)
        //let files = req.files
        console.log("files", req.files)

        const coursedata = await courses.findById(req.params.id);
        console.log("coursedata", coursedata)


        let updatedata = { ...req.body, course_img: coursedata.course_img, course_video: { public_id: coursedata.course_video.public_id, url: coursedata.course_video.url } }
        console.log("updatedata", updatedata)

        if (req.files) {

            let course_images = [];
            let files = req.files
            // let notupdateid = req.body.notupdateid || []
            // if (typeof notupdateid === "string") {
            //     notupdateid = [notupdateid];
            // }
            console.log("notupdate", req.body.notupdateid)
            console.log("imges", coursedata.course_img)

            const delimg = coursedata.course_img.filter((v) => !req.body.notupdateid.includes(v.public_id))
            console.log("delimg", delimg)

            const remimg = coursedata.course_img.filter((v) => req.body.notupdateid.includes(v.public_id))
            console.log("delimg", delimg)

            for (let i = 0; i < delimg.length; i++) {
                const delobj = await cloudinarydelete(delimg[i].public_id);
                console.log("delobj", delobj)
            }

            // delimg.map(async (v) => {
            //     const delobj = await cloudinarydelete(v.public_id);
            //     console.log("delobj", delobj)
            //     // fs.unlink(v.course_img, (error) => {
            //     //     console.log(error)
            //     // })
            // })

            if (files.course_img && files.course_img.length >= 0) {
                for (let file of files.course_img) {
                    const obj = await cloudinaryupload(file.path, "course");
                    remimg.push({ public_id: obj.public_id, url: obj.url });
                }
            }

            if (files.course_video) {
                await cloudinarydelete(coursedata.course_video.public_id);

                const obj1 = await cloudinaryupload(files.course_video[0].path, "course_video");

                updatedata.course_video = { public_id: obj1.public_id, url: obj1.url }
            }


            // const obj = await cloudinaryupload(req.file.path, "course");

            updatedata.course_img = remimg
        }

        const course = await courses.findByIdAndUpdate(
            req.params.id,
            updatedata,
            { new: true, runValidators: true }
        )

        console.log("course", course.course_img)

        if (!course) {
            return res.status(400).json({ data: null, message: "course not update" + error.message })
        }

        return res.status(200).json({ data: course, message: "course update succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at update course" + error })
    }
}

const updateStatus = async (req, res) => {
    // #swagger.tags = ['Coures']
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
    // #swagger.tags = ['Coures']
    console.log("deleteid", req.params.id)
    try {

        const course = await courses.findByIdAndDelete(req.params.id);

        console.log(course)

        // course.course_img.map((v) => {
        //     await cloudinarydelete(course.course_img.public_id);
        // })

        for (let i = 0; i < course.course_img.length; i++) {
            await cloudinarydelete(course.course_img[i].public_id,'image');
        }

        await cloudinarydelete(course.course_video.public_id,'video');

        // await cloudinarydelete(course.course_img.public_id);

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
const Demo = require("../models/demo.model")
const { default: mongoose } = require("mongoose");
const fs = require("fs");
const { cloudinaryupload } = require("../service/cloudinary");

const getdemo = async (req, res) => {
    // #swagger.tags = ['Coures']
    try {

        // console.log("cat", "ok")

        // const obj = await cloudinaryupload(req.file.path, "demo")
        // const demo = await demo.create({ ...req.body, demo_img: { public_id: obj.public_id, url: obj.url } })


        // if (!demo) {
        //     return res.status(400).json({ data: null, message: "category data not added" })
        //}

        return res.status(200).json({ message: "category data add succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at add demo" + error.message })
    }
}

const adddemo = async (req, res) => {
    // #swagger.tags = ['Coures']
    try {

        console.log("cat", req.files)
        const files = req.files;
        let demo_images = [];
        let demo_videos = {}

        // const obj = await cloudinaryupload(req.file.path, "demo")
        // const demo = await Demo.create({ ...req.body, demo_img: { public_id: obj.public_id, url: obj.url } })

        // if (!demo) {
        //     return res.status(400).json({ data: null, message: "category data not added" })
        // }

        if (files.demo_img && files.demo_img.length > 0) {
            for (let file of files.demo_img) {
                const obj = await cloudinaryupload(file.path, "demo");
                demo_images.push({ public_id: obj.public_id, url: obj.url });
            }
        }
        // else if (files.demo_video[0]) {
        //     console.log("videro")
        //     const obj = await cloudinaryupload(files.demo_video[0].path, "demo_video");
        //     demo_videos = {public_id: obj.public_id, url: obj.url}
        // }

        const obj = await cloudinaryupload(files.demo_video[0].path, "demo_video");
        demo_videos = { public_id: obj.public_id, url: obj.url }
        const demo = await Demo.create({ ...req.body, demo_img: demo_images, demo_video: demo_videos })

        return res.status(200).json({ data: demo, message: "category data add succesfully" })

    } catch (error) {
        return res.status(400).json({ data: null, message: "internal server error at add demo" + error.message })
    }
}


module.exports = {
    adddemo,
    getdemo
}
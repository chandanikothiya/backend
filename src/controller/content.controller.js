const content = require('../models/content.model')
const { cloudinaryupload, cloudinarydelete } = require('../service/cloudinary')

const getcontent = async (req, res) => {
    try {
        const contentdata = await content.find()

        if (!contentdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "content data not fetch"
                })
        }


        return res.status(200)
            .json({
                suucess: true,
                data: contentdata,
                message: "content fetch successfully"
            })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server error at fetch content" + error.message
        })
    }
}

const addcontent = async (req, res) => {
    try {
        console.log(req.body, req.files)
        //const checkcontent = await content.findOne({ name: req.body.name })

        // if (checkcontent) {
        //     return res.status(400)
        //         .json({
        //             suucess: false,
        //             data: null,
        //             message: "content alerdy exists"
        //         })
        // }

        let content_file = []

        if (req.files) {
            // for (let file of req.files) {
            //     console.log("req.files?.mimetype",req.files?.mimetype)
            //     if (req.files?.mimetype?.includes('/pdf')) {
            //         content_file.push({ url: req.files.path })
            //     } else {
            //         const obj = await cloudinaryupload(file.path, "content_file");
            //         content_file.push({ public_id: obj.public_id, url: obj.url })
            //     }

            // }
            for (let file of req.files) {
                const obj = await cloudinaryupload(file.path, "content_file");
                content_file.push({ public_id: obj.public_id, url: obj.url })
            }
        }

        const contentdata = await content.create({ ...req.body, content_file: content_file })

        if (!contentdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "content not add"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: contentdata,
                message: "content add successfully"
            })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server error at add content" + error.message
        })
    }
}

const editcontent = async (req, res) => {
    try {
        console.log(req.params.id)
        const checkcontent = await content.findById(req.params.id);

        const updatedata = { ...req.body, content_file: checkcontent.content_file }

        if (!checkcontent) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "content not exists"
                })
        }



        if (req.files) {
            let files = req.files
            console.log(req.files)
            console.log(req.body)
            console.log("notupdate", req.body.notupdateid)

            let notupdateid = JSON.parse(req.body.notupdateid || "[]")
                .filter(id => id); // remove null

            console.log("notupdateid:", notupdateid);

            const delimg = checkcontent.content_file.filter(
                (v) => !notupdateid.includes(v.public_id)
            );

            const remimg = checkcontent.content_file.filter(
                (v) => notupdateid.includes(v.public_id)
            );

            console.log("delimg", delimg, "remimg", remimg)

            for (let i = 0; i < delimg.length; i++) {
                const delobj = await cloudinarydelete(delimg[i].public_id);
                console.log("delobj", delobj)
            }

            if (req.files) {
                for (let file of req.files) {
                    const obj = await cloudinaryupload(file.path, "content_file");
                    console.log("UPLOADED:", obj);
                    remimg.push({ public_id: obj.public_id, url: obj.url });
                }
            }

            updatedata.content_file = remimg
        }

        const updatecontent = await content.findByIdAndUpdate(
            req.params.id,
            updatedata,
            { new: true, runValidators: true }
        )

        if (!updatecontent) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "content not update"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: updatecontent,
                message: "content update successfully"
            })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server error at update content" + error.message
        })
    }
}

const deletecontent = async (req, res) => {
    try {
        const checkcontent = await content.findById(req.params.id);

        //const updatedata = { ...req.body, content_file: checkcontent.checkcontent }

        if (!checkcontent) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "content not exists"
                })
        }

        const deletecontent = await content.findByIdAndDelete(req.params.id)

        for (let i = 0; i < deletecontent.content_file.length; i++) {
            if (deletecontent.content_file[i].url.includes(".mp4")) {
                await cloudinarydelete(deletecontent.content_file[i].public_id,'video');
            } else {
                await cloudinarydelete(deletecontent.content_file[i].public_id);
            }
            
        }

        if (!deletecontent) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "content not delete"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: deletecontent,
                message: "content delete successfully"
            })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "internal server error at delete content" + error.message
        })
    }
}

module.exports = {
    addcontent,
    editcontent,
    getcontent,
    deletecontent
}
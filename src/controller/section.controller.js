
const section = require('../models/section.model')

const getsection = async (req, res) => {
    try {
        const sectiondata = await section.find()

        if (!sectiondata) {
            return res.status(400).json({
                suucess: false,
                data: null,
                message: "scetion data not fetch"
            })
        }

        return res.status(200).json({
            suucess: true,
            data: sectiondata,
            message: "section fetch successfully"
        })

    } catch (error) {
        return res.status(500).json({
            suucess: false,
            data: null,
            message: "internl server error at section fetch " + error.message
        })
    }
}

const addsection = async (req, res) => {
    try {
        const check = await section.findOne({ name: req.body.name })

        if (check) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "section alerdy exists"
                })
        }

        const sectiondata = await section.create(req.body)

        if (!sectiondata) {
            return res.status(400).json({
                suucess: false,
                data: null,
                message: "scetion data not added"
            })
        }

        return res.status(200).json({
            suucess: true,
            data: sectiondata,
            message: "section add successfully"
        })

    } catch (error) {
        return res.status(500).json({
            suucess: false,
            data: null,
            message: "internl server error at section add " + error.message
        })
    }
}

const updatesection = async (req, res) => {
    try {
        const check = await section.findById(req.params.id)

        if (!check) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "section not exists"
                })
        }

        const sectiondata = await section.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true, runValidators: true}
        )

        if (!sectiondata) {
            return res.status(400).json({
                suucess: false,
                data: null,
                message: "scetion data not update"
            })
        }

        return res.status(200).json({
            suucess: true,
            data: sectiondata,
            message: "section update successfully"
        })

    } catch (error) {
        return res.status(500).json({
            suucess: false,
            data: null,
            message: "internl server error at section update " + error.message
        })
    }
}

const deletesection = async (req, res) => {
    try {
        const check = await section.findById(req.params.id)

        if (!check) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "section not exists"
                })
        }

        const sectiondata = await section.findByIdAndDelete(req.params.id)

        if (!sectiondata) {
            return res.status(400).json({
                suucess: false,
                data: null,
                message: "scetion data not delete"
            })
        }

        return res.status(200).json({
            suucess: true,
            data: sectiondata,
            message: "section delete successfully"
        })

    } catch (error) {
        return res.status(500).json({
            suucess: false,
            data: null,
            message: "internl server error at section delete " + error.message
        })
    }
}


module.exports = {
    getsection,
    addsection,
    updatesection,
    deletesection
}
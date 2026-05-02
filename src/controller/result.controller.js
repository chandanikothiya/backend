const result = require('../models/result.model')

const getallresult = async (req, res) => {
    try {

        const resultdata = await result.find();

        if (!resultdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "all result not get"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: resultdata,
                message: "all result get"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at all result get " + error.message
            })
    }
}

const getresult = async (req, res) => {
    try {

        const resultdata = await result.findOne({ user_id: req.params.id });

        if (!resultdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "result not get"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: resultdata,
                message: "result get"
            })

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at result get " + error.message
            })
    }
}

const addresult = async (req, res) => {
    try {
        console.log(req.body)
        const checkresult = await result.findOne({ user_id: req.body.user_id, quiz_id: req.body.quiz_id })
        console.log(checkresult)
        if (!checkresult) {
            console.log("incheck");

            const resultdata = await result.create(req.body);

            if (!resultdata) {
                return res.status(400)
                    .json({
                        suucess: false,
                        data: null,
                        message: "result not add"
                    })
            }

            return res.status(200)
                .json({
                    suucess: true,
                    data: resultdata,
                    message: "result add"
                })
        } else {
            const updated = await result.findOneAndUpdate(
                { user_id: req.body.user_id, quiz_id: req.body.quiz_id },
                req.body,
                { new: true }
            );

            if (!updated) {
                return res.status(400)
                    .json({
                        suucess: false,
                        data: null,
                        message: "result not updated"
                    })
            }

            return res.status(200)
                .json({
                    suucess: true,
                    data: updated,
                    message: "result updated"
                })
        }

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at result add " + error.message
            })
    }
}

module.exports = {
    addresult,
    getallresult,
    getresult
}
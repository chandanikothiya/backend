const quize = require('../models/quize.model')

const getquize = async (req, res) => {
    try {

        const quizedata = await quize.find()

        if (!quizedata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "quize data not fetch"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: quizedata,
                message: "quize data fetch"
            })

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at quize data fetch " + error.message
            })
    }
}

const addquize = async (req, res) => {
    try {
        const checkquize = await quize.findOne({ name: req.body.name });

        if (checkquize) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "quize alerdy exists"
                })
        }

        const quizedata = await quize.create(req.body)

        if (!quizedata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "quize not add"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: quizedata,
                message: "quize add"
            })

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at quize add " + error.message
            })
    }
}

const updatequize = async (req, res) => {
    try {
        console.log(req.params.id,req.body)
        const checkquize = await quize.findById(req.params.id);
        console.log(checkquize)

        if (!checkquize) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "quize not exists"
                })
        }

        const quizedata = await quize.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators: true}
        )

        console.log(quizedata)

        if (!quizedata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "quize not update"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: quizedata,
                message: "quize update"
            })

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at quize update " + error.message
            })
    }
}

const deletequize = async (req, res) => { 
    try {
        console.log(typeof req.params.id,req.body)
        const checkquize = await quize.findById(req.params.id);
        console.log(checkquize)

        if (!checkquize) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "quize not exists"
                })
        }

        const quizedata = await quize.findByIdAndDelete(req.params.id)

        console.log(quizedata)

        if (!quizedata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "quize not delete"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: quizedata,
                message: "quize delete"
            })

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at quize delete " + error.message
            })
    }
}

module.exports = {
    getquize,
    addquize,
    updatequize,
    deletequize
}
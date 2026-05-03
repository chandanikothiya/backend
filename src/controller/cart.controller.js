const cart = require('../models/cart.model')

const getallcart = async (req, res) => {
    try {

        const cartdata = await cart.find()

        if (!cartdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "cart not get"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: cartdata,
                message: "cart get"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at cart get " + error.message
            })
    }
}

const getcart = async (req, res) => {
    try {

        const cartdata = await cart.findOne({ user_id: req.params.id })

        if (!cartdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "cartdata not get"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: cartdata,
                message: "cartdata get"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at cartdata get " + error.message
            })
    }
}

const addcart = async (req, res) => {
    try {
        const check = await cart.findOne({ user_id: req.body.user_id });
        console.log(check)

        if (check) {
            check.course.push({ course_id: req.body.course_id })
            await check.save();

            if (!check) {
                return res.status(400)
                    .json({
                        suucess: false,
                        data: null,
                        message: "cartdata not updated"
                    })
            }

            return res.status(200)
                .json({
                    suucess: true,
                    data: check,
                    message: "cartdata updated"
                })
        } else {
            const course = { course_id: req.body.course_id }

            const cartdata = await cart.create({ ...req.body, course: course })

            if (!cartdata) {
                return res.status(400)
                    .json({
                        suucess: false,
                        data: null,
                        message: "cartdata not add"
                    })
            }

            return res.status(200)
                .json({
                    suucess: true,
                    data: cartdata,
                    message: "cartdata add"
                })
        }

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at cartdata add " + error.message
            })
    }
}

const deletecart = async (req, res) => {
    try {

        const cartdata = await cart.findById(req.params.id);

        console.log("cartdata",cartdata,req.body.course_id)

        const newcorse = cartdata.course.filter((v) => v.course_id.toString() !== req.body.course_id.toString())
        console.log(newcorse)
        cartdata.course = newcorse;
        await cartdata.save();

        if (!cartdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "cartdata not delete"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: cartdata,
                message: "cartdata delete"
            })

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at cartdata delete " + error.message
            })
    }
}

module.exports = {
    addcart,
    getallcart,
    getcart,
    deletecart
}
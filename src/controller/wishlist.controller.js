const wishlist = require('../models/wishlist.model')

const getallwishlist = async (req, res) => {
    try {

        const wishlistdata = await wishlist.find()

        if (!wishlistdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "wishlistdata not get"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: wishlistdata,
                message: "wishlistdata get"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at wishlist get " + error.message
            })
    }
}

const getwishlist = async (req, res) => {
    try {

        const wishlistdata = await wishlist.findOne({ user_id: req.params.id })

        if (!wishlistdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "wishlistdata not get"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: wishlistdata,
                message: "wishlistdata get"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at wishlist get " + error.message
            })
    }
}

const addwishlist = async (req, res) => {
    try {

        const check = await wishlist.findOne({ user_id: req.body.user_id });
        console.log(check)

        if (check) {
            check.course.push({ course_id: req.body.course_id })
            await check.save();

            if (!check) {
                return res.status(400)
                    .json({
                        suucess: false,
                        data: null,
                        message: "wishlistdata not updated"
                    })
            }

            return res.status(200)
                .json({
                    suucess: true,
                    data: check,
                    message: "wishlistdata updated"
                })
        } else {
            const course = { course_id: req.body.course_id }

            const wishlistdata = await wishlist.create({ ...req.body, course: course })

            if (!wishlistdata) {
                return res.status(400)
                    .json({
                        suucess: false,
                        data: null,
                        message: "wishlistdata not add"
                    })
            }

            return res.status(200)
                .json({
                    suucess: true,
                    data: wishlistdata,
                    message: "wishlistdata add"
                })
        }

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at wishlist add " + error.message
            })
    }
}

const deleteWishlist = async (req, res) => {
    try {
        console.log(req.body)
        const wishlistdata = await wishlist.findOne({user_id:req.params.id});

        console.log("wishlistdata",wishlistdata,req.body.course_id)

        const newcorse = wishlistdata.course.filter((v) => v.course_id.toString() !== req.body.course_id.toString())
        console.log(newcorse.course)
        wishlistdata.course = newcorse;
        await wishlistdata.save();

        if (!wishlistdata) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "wishlistdata not delete"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: wishlistdata,
                message: "wishlistdata delete"
            })

    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at wishlist delete " + error.message
            })
    }
}

module.exports = {
    addwishlist,
    getallwishlist,
    getwishlist,
    deleteWishlist
}
const coupon = require('../models/coupon.model')

const getallcoupon = async (req, res) => {
    try {

        const coupondata = await coupon.find();

        if (!coupondata) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon not get'
            })
        }

        return res.status(200).json({
            success: true,
            data: coupondata,
            message: 'coupon get successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'internal server error at all coupon get ' + error.message
        })
    }
}

const getcoupon = async (req, res) => {
    try {
        console.log(req.params.id)
        const coupondata = await coupon.findById(req.params.id);
        console.log(coupondata)
        if (!coupondata) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon not get'
            })
        }

        return res.status(200).json({
            success: true,
            data: coupondata,
            message: 'coupon get successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'internal server error at  coupon get ' + error.message
        })
    }
}

const addcoupon = async (req, res) => {
    try {
        const check = await coupon.findOne({ code: req.body.code })

        if (check) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon alerdy exists'
            })
        }

        const coupondata = await coupon.create(req.body);

        if (!coupondata) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon not add'
            })
        }

        return res.status(200).json({
            success: true,
            data: coupondata,
            message: 'coupon add successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'internal server error at coupon add ' + error.message
        })
    }
}

const updatecoupon = async (req, res) => {
    try {
        console.log(req.params.id)
        const couponcheck = await coupon.findById(req.params.id);
        //console.log(coupondata)
        if (!couponcheck) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon not exists'
            })
        }

        const coupondata = await coupon.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true }
        )

        if (!coupondata) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon not update'
            })
        }

        return res.status(200).json({
            success: true,
            data: coupondata,
            message: 'coupon update successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'internal server error at  coupon update ' + error.message
        })
    }
}


const deletecoupon = async (req, res) => {
    try {
        console.log(req.params.id)
        const couponcheck = await coupon.findById(req.params.id);
        //console.log(coupondata)
        if (!couponcheck) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon not exists'
            })
        }

        const coupondata = await coupon.findByIdAndDelete(req.params.id)

        if (!coupondata) {
            return res.status(400).json({
                success: false,
                data: [],
                message: 'coupon not delete'
            })
        }

        return res.status(200).json({
            success: true,
            data: coupondata,
            message: 'coupon delete successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'internal server error at  coupon delete ' + error.message
        })
    }
}


module.exports = {
    addcoupon,
    getallcoupon,
    getcoupon,
    updatecoupon,
    deletecoupon
}


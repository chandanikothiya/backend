const express = require('express');
const { couponController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/coupon/getallCoupon
router.get('/getallcoupon',couponController.getallcoupon)


router.get('/getcoupon/:id',couponController.getcoupon)


router.post('/addcoupon',couponController.addcoupon)


router.put('/updatecoupon/:id',couponController.updatecoupon)


router.delete('/deletecoupon/:id',couponController.deletecoupon)

module.exports = router
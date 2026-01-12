const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/coupon/getallCoupon
router.get('/getallCoupon',(req,res) => {
    res.status(200).json({message:'all Coupon fetch'})
})


router.get('/getCoupon',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addCoupon',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Coupon'})
})


router.put('/updateCoupon/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Coupon'})
})


router.delete('/deleteCoupon/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Coupon'})
})

module.exports = router
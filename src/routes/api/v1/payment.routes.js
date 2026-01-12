const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/payment/getallPayment
router.get('/getallPayment',(req,res) => {
    res.status(200).json({message:'all Payment fetch'})
})


router.get('/getPayment',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addPayment',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Payment'})
})


router.put('/updatePayment/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Payment'})
})


router.delete('/deletePayment/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Payment'})
})

module.exports = router
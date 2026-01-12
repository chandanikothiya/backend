const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/admission/getallAdmission
router.get('/getallAdmission',(req,res) => {
    res.status(200).json({message:'all Admission fetch'})
})


router.get('/getAdmission',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addAdmission',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Admission'})
})


router.put('/updateAdmission/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Admission'})
})


router.delete('/deleteAdmission/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Admission'})
})

module.exports = router
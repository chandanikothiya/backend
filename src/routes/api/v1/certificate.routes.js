const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/certifiacte/getallCertificate
router.get('/getallCertificate',(req,res) => {
    res.status(200).json({message:'all Certificate fetch'})
})


router.get('/getCertificate',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addCertificate',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Certificate'})
})


router.put('/updateCertificate/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Certificate'})
})


router.delete('/deleteCertificate/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Certificate'})
})

module.exports = router
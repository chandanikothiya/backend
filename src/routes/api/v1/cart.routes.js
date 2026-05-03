const express = require('express');
const { cartController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/cart/getallCart
router.get('/getallcart',cartController.getallcart);

router.get('/getcart/:id',cartController.getcart);

router.post('/addcart',cartController.addcart);

// router.put('/updateCart/:id',(req,res) => {
//     console.log(req.params.id)
//     res.status(200).json({message:'update Cart'})
// })

router.delete('/deletecart/:id',cartController.deletecart);

module.exports = router;
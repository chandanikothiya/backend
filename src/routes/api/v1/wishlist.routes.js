const express = require('express');
const { wishlistController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/wishlist/getallWishlist
router.get('/getallwishlist',wishlistController.getallwishlist)


router.get('/getwishlist/:id',wishlistController.getwishlist)


router.post('/addwishlist',wishlistController.addwishlist)


router.put('/updateWishlist/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Wishlist'})
})


router.delete('/deletewishlist/:id',wishlistController.deleteWishlist)

module.exports = router
const express = require('express');
const { demoController } = require('../../../controller');
const upload = require('../../../middleware/upload');
const auth = require('../../../middleware/auth');
const validation = require('../../../middleware/validationmiddle');
const { addCategorySchema, updateCategorySchema, deleteCategorySchema } = require('../../../validation/category.validation');
const router = express.Router();

//http://localhost:8080/api/v1/demo/adddemo

router.get('/getdemo',demoController.getdemo)



// router.post('/adddemo',upload.array('demo_img',10),demoController.adddemo)

router.post('/adddemo',upload.fields([{ name: 'demo_img', maxCount: 10 }, { name: 'demo_video', maxCount:1 }]),demoController.adddemo)

module.exports = router

//,auth(['admin','employe','instructore','user']),
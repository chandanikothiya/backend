const express = require('express');
const { registerController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/register/addRegister
router.post('/addRegister',registerController.adduser)


module.exports = router
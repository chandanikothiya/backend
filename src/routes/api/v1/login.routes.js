const express = require('express');
const { loginuserController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/login/loginuser
router.post('/loginuser',loginuserController.loginuser)

module.exports = router
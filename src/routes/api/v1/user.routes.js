const express = require('express');
const { userController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/user/addRegister
router.post('/addRegister',userController.adduser)

//http://localhost:8080/api/v1/user/verifyuser
router.post('/verifyuser',userController.verifyuser)

//http://localhost:8080/api/v1/user/loginuser
router.post('/loginuser',userController.loginuser)

//http://localhost:8080/api/v1/user/loginuser
router.post('/genratenewtoken',userController.genratenewtoken)

//http://localhost:8080/api/v1/user/logout
router.post('/logout',userController.logout)

//http://localhost:8080/api/v1/user/checkauth
router.get('/checkauth',userController.checkauth)


module.exports = router
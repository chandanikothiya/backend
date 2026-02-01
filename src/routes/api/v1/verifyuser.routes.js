const express = require('express')
const { verifyuserController } = require('../../../controller')
const router = express.Router()

//http://localhost:8080/api/v1/verifyuser/verificationuser
router.post('/verificationuser',verifyuserController.verifyuser)


module.exports = router
const express = require('express');
const { TermsController } = require('../../../controller');
const upload = require('../../../middleware/upload');
const router = express.Router();


//http://localhost:8080/api/v1/terms/getallTerms
router.get('/getallTerms',TermsController.getallTerms)

// router.get('/getTerms/:id',TermsController.getTerms)


router.post('/addTerms',TermsController.addTerms)


router.put('/updateTerms/:id',TermsController.updateTerms)

// router.put('/updateStatus/:id',TermsController.updateStatus)

router.delete('/deleteTerms/:id',TermsController.deleteTerms)

module.exports = router
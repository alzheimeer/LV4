const { Router } = require('express');
const { createPoderPDF, createContratoPDF } = require('../controllers/pdf.controller');
const router = Router();

//all users
router.put('/poder', createPoderPDF);
router.put('/contrato', createContratoPDF);



module.exports = router;
const { Router } = require('express');
const { createPoderPDF, createContratoPDF } = require('../controllers/pdf.controller');
const router = Router();

//all users
router.put('/poder', [createPoderPDF, createContratoPDF]);
// router.put('/contrato', createContratoPDF);



module.exports = router;
const { Router } = require('express');
const { createPoderPDF } = require('../controllers/pdf.controller');
const router = Router();

//all users
router.put('/', createPoderPDF);


module.exports = router;
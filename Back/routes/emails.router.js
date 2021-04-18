const { Router } = require('express');
const router = Router();
const { enviarEmail } = require('../controllers/email.controller');

router.post('/', enviarEmail);

module.exports = router;
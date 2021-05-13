const { Router } = require('express');
const router = Router();
const { createBill, createBillIni, getBills, getBillById, updateBillById, updateBillComprobante, deleteBillById, uploadFileComprobante } = require('../controllers/bills.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');
const { uploadComprobante } = require('../middlewares/multer');

router.post('/', createBill);

router.post('/ini/', createBillIni);

router.get('/', getBills);

router.get('/:billId', getBillById);

router.put('/:billId', [validarJWT, isModerator], updateBillById);

// para comprobar recibo de pago
router.put('/comprobar/:billId', [validarJWT, isModerator], updateBillComprobante);

router.delete('/:billId', [validarJWT, isAdmin], deleteBillById);

//Upload Doc Comprobante Pago
router.put('/comprobante/:billId', uploadComprobante, uploadFileComprobante);



module.exports = router;
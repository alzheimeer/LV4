const { Router } = require('express');
const router = Router();
const { createBill, getBills, getBillById, updateBillById, deleteBillById } = require('../controllers/bills.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');

router.post('/', createBill);
// router.post('/', [validarJWT, isModerator], createBill);

router.get('/', getBills);

router.get('/:billId', getBillById);

router.put('/:billId', [validarJWT, isAdmin], updateBillById);

router.delete('/:billId', [validarJWT, isAdmin], deleteBillById);


module.exports = router;
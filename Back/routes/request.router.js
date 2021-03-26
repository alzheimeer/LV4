const { Router } = require('express');
const router = Router();
const { createRequest, getRequests, getRequestById, updateRequestById, deleteRequestById } = require('../controllers/request.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');

router.post('/', [validarJWT, isUser], createRequest);

router.get('/', getRequests);

router.get('/:requestId', getRequestById);

router.put('/:requestId', [validarJWT, isUser], updateRequestById);

router.delete('/:requestId', [validarJWT, isAdmin], deleteRequestById);


module.exports = router;
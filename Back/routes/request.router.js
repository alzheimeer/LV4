const { Router } = require('express');
const router = Router();
const { createRequest, getRequests, getRequestById, updateRequestById, deleteRequestById} = require('../controllers/request.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');

router.post('/', [validarJWT, isModerator], createRequest);

router.get('/', getRequests);

router.get('/:requestId', getRequestById);

router.put('/:requestId', [validarJWT, isAdmin], updateRequestById);

router.delete('/:requestId', [validarJWT, isAdmin], deleteRequestById);


module.exports = router;
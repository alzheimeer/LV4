const { Router } = require('express');
const router = Router();
const { createRequest, getRequests, getRequestById, getRequestByIdUser, updateRequestById, deleteRequestById } = require('../controllers/request.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');

router.post('/', [validarJWT, isUser], createRequest);

router.get('/', getRequests);

router.get('/:requestId', getRequestById);

router.get('/user/:userId', getRequestByIdUser);

router.put('/:requestId', [validarJWT, isUser], updateRequestById);

router.delete('/:requestId', [validarJWT, isAdmin], deleteRequestById);


module.exports = router;
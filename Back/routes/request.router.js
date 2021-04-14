const { Router } = require('express');
const router = Router();
const { createRequest, getRequests, getRequestById, getRequestByIdUser, updateRequestById, deleteRequestById } = require('../controllers/request.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');
const { uploadTarjetav, uploadMatricula, uploadExtracto } = require('../middlewares/multer');
const { uploadFileTarjetav, uploadFileMatricula, uploadFileExtracto } = require('../controllers/request.controller');



router.post('/', [validarJWT, isUser], createRequest);

router.get('/', getRequests);

router.get('/:requestId', getRequestById);

router.get('/user/:userId', getRequestByIdUser);

router.put('/:requestId', [validarJWT, isUser], updateRequestById);

router.delete('/:requestId', [validarJWT, isAdmin], deleteRequestById);

//Upload Doc Tarjetav
router.put('/tarjetav/:requestId', uploadTarjetav, uploadFileTarjetav);

//Upload Doc Matricula
router.put('/matricula/:requestId', uploadMatricula, uploadFileMatricula);

//Upload Doc Extracto
router.put('/extracto/:requestId', uploadExtracto, uploadFileExtracto);

module.exports = router;
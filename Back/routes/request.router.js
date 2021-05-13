const { Router } = require('express');
const router = Router();
const { createRequest, getRequests, getRequestById, getRequestByIdUser, updateRequestById, deleteRequestById, } = require('../controllers/request.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');
const { uploadTarjetav, uploadMatricula, uploadExtracto, uploadCamaraCom, uploadRut, uploadEstudioObra, uploadProgramaObra, uploadCuraduria, uploadLicenciaConst } = require('../middlewares/multer');
const { uploadFileTarjetav, uploadFileMatricula, uploadFileExtracto, uploadFileCamaraCom, uploadFileRut, uploadFileEstudioObra, uploadFileProgramaObra, uploadFileCuraduria, uploadFileLicenciaConst } = require('../controllers/request.controller');



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
//Upload Doc CamaraCom
router.put('/CamaraCom/:requestId', uploadCamaraCom, uploadFileCamaraCom);
//Upload Doc Rut
router.put('/Rut/:requestId', uploadRut, uploadFileRut);
//Upload Doc EstudioObra
router.put('/EstudioObra/:requestId', uploadEstudioObra, uploadFileEstudioObra);
//Upload Doc ProgramaObra
router.put('/ProgramaObra/:requestId', uploadProgramaObra, uploadFileProgramaObra);
//Upload Doc Curaduria
router.put('/Curaduria/:requestId', uploadCuraduria, uploadFileCuraduria);
//Upload Doc LicenciaConst
router.put('/LicenciaConst/:requestId', uploadLicenciaConst, uploadFileLicenciaConst);

module.exports = router;
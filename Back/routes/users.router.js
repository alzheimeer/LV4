const { Router } = require('express');
const { getUsers, getUserById, updateUserById, deleteUserById, completeUserById, showFile, uploadFile } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { uploadX } = require('../middlewares/multer')
const router = Router();



//all users
router.get('/', getUsers);

//Find a user
router.get('/:userId', getUserById); 

//Add more user data
router.put('/completeuser/:userId',  [
    check('replace.personal.tipodoc', 'El Tipo de documento es obligatorio').not().isEmpty().trim(),
    check('replace.personal.numdoc', 'El numero de documento es obligatorio').not().isEmpty().trim().isNumeric().withMessage('Solo numeros sin espacios porfavor'),
    check('replace.personal.pais', 'El Pais es obligatorio').not().isEmpty().trim(),
    check('replace.personal.departamento', 'El departamento es obligatorio').not().isEmpty().trim(),
    check('replace.personal.ciudad', 'La Ciudad es obligatoria').not().isEmpty().trim(),
    check('replace.personal.barrio', 'El Barrio es obligatorio').not().isEmpty().trim(),
    check('replace.personal.direccion', 'La Direccion es obligatoria').not().isEmpty().trim(),
    check('replace.personal.celular1').isLength({min: 10, max: 10 }).withMessage('Numero no tiene 10 digitos').trim().isNumeric().withMessage('Solo numeros porfavor'),
    check('replace.banca.banco', 'El banco es obligatoria').not().isEmpty().trim(),
    check('replace.banca.tipocuenta', 'El tipo de cuenta es obligatorio').not().isEmpty().trim(),
    check('replace.banca.numcuenta', 'El numero de cuenta es obligatorio').not().isEmpty().trim().isNumeric().withMessage('Solo numeros porfavor'),
    validarCampos
] ,completeUserById);

//Update user
router.put('/:userId', updateUserById);

//Delete
router.delete('/:userId', deleteUserById);

//Upload Photo Avatar
router.put('/avatar/:userId', uploadX, uploadFile);

module.exports = router;
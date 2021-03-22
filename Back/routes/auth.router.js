const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


// create user
// There are 3 parameters 1.the route 2.the middlewares 3.controller of this route
// you can omit the second middlewares
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('surname', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),    
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos
],crearUsuario);

// Login the user
// There are 3 parameters 1.the route 2.the middlewares 3.controller of this route
// you can omit the second middlewares
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos
] ,loginUsuario);


//Validation and RE validation token
router.get('/renew', validarJWT, revalidarToken);



module.exports = router;
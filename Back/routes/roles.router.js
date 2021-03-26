const { Router } = require('express');
const router = Router();
const { createRole, getRoles, getRoleById, updateRoleById, deleteRoleById } = require('../controllers/roles.controller');
const { validarJWT, isAdmin } = require('../middlewares/validar-jwt');

router.post('/', [validarJWT, isAdmin], createRole);

router.get('/', getRoles);

router.get('/:rolesId', getRoleById);

router.put('/:rolesId', [validarJWT, isAdmin], updateRoleById);

router.delete('/:rolesId', [validarJWT, isAdmin], deleteRoleById);


module.exports = router;
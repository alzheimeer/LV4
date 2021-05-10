const { Router } = require('express');
const router = Router();
const { createMarca, getMarcas, getMarcaById, updateMarcaById, deleteMarcaById } = require('../controllers/marcas.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');

router.post('/', createMarca);

router.get('/', getMarcas);

router.get('/:marcaId', getMarcaById);

router.put('/:marcaId', updateMarcaById);

router.delete('/:marcaId', deleteMarcaById);


module.exports = router;
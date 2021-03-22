const { Router } = require('express');
const router = Router();
const { createProduct, getProducts, getProductById, updateProductById, deleteProductById} = require('../controllers/products.controller');
const { validarJWT, isAdmin, isModerator, isUser } = require('../middlewares/validar-jwt');

router.post('/', [validarJWT, isModerator], createProduct);

router.get('/', getProducts);

router.get('/:productId', getProductById);

router.put('/:productId', [validarJWT, isAdmin], updateProductById);

router.delete('/:productId', [validarJWT, isAdmin], deleteProductById);


module.exports = router;
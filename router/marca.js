//importar el modelo bd de Marca
const { getMarcas, postMarca, putMarca } = require('../controllers/marca');
const Marca = require('../models/Marca');
//importar Router desde express
const { Router } = require('express');
const router = Router();


router.get('/', getMarcas);

router.post('/', postMarca);

router.put('/:idMarca', putMarca);

module.exports = router;

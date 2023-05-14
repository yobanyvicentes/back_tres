//importar funciones
const {getTipos, postTipo, putTipo} = require('../controllers/tipoEquipo');
//importar Router desde express
const {Router} = require('express');
const router = Router();

router.get('/',  getTipos);

router.post('/', postTipo);

router.put('/:TipoID', putTipo);

module.exports = router;

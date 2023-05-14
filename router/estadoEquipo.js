//importar funciones
const {getEstados, postEstado, putEstado} = require('../controllers/estadoEquipo');

//importar Router desde express
const {Router} = require('express');
const router = Router();

router.get('/',  getEstados);

router.post('/',  postEstado);

router.put('/:estadoID',  putEstado);

module.exports = router;

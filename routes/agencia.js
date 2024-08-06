const express = require('express');
const router = express.Router();

const agenciaController = require('../controller/agenciaController');

router.post('/createdAgencia', agenciaController.createAgencia);
router.get('/getAgencia', agenciaController.getAgencia);
router.get('/getId/:agnombre/:agid', agenciaController.getId);


module.exports = router;
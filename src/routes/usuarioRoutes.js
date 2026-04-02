const { Router } = require('express');
const { criar, listar, atualizar } = require('../controllers/usuarioController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.put("/:id", atualizar);

module.exports = router;
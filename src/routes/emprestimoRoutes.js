const Router = require('express');
const { criar, listar, atualizar, buscarPorId, buscarPorUsuario } = require('../controllers/emprestimoController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.put("/:id", atualizar);
router.get("/:id", buscarPorId);
router.get("/usuarios/:usuario_id", buscarPorUsuario);

module.exports = router;

const Router = require('express');
const { criar, listar, atualizar, buscarPorId } = require('../controllers/emprestimoController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.put("/:id", atualizar);
router.get("/:id", buscarPorId);

module.exports = router;

const { Router } = require('express');
const { criar, listar, deletar, buscarPorId, atualizar, listarDisponiveis } = require('../controllers/livroController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.get("/disponiveis", listarDisponiveis);
router.put("/:id", atualizar);
router.get("/:id", buscarPorId);
router.delete('/:id', deletar);

module.exports = router;
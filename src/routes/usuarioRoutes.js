const { Router } = require('express');
const { criar, listar, atualizar, buscarPorId, deletar, listarEmprestimos } = require('../controllers/usuarioController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.get("/:id/emprestimos", listarEmprestimos);
router.put("/:id", atualizar);
router.get("/:id", buscarPorId);
router.delete('/:id', deletar);

module.exports = router;

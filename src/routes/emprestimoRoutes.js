const Router = require('express');
const { criar, listar, atualizar, buscarPorId, deletar } = require('../controllers/emprestimoController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.put("/:id", atualizar);
router.get("/:id", buscarPorId);
router.delete('/:id', deletar);


module.exports = router;

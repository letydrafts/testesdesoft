const Router = require('express');
const { criar, listar, atualizar } = require('../controllers/emprestimoController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.put("/:id", atualizar);

module.exports = router;

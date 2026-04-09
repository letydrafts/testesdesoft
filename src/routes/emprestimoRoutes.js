const Router = require('express');
const { criar, listar } = require('../controllers/emprestimoController');

const router = Router();

router.post("/", criar);
router.get("/", listar);

module.exports = router;

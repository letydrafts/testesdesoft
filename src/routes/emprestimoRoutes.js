const Router = require('express');
const { criar } = require('../controllers/emprestimoController');

const router = Router();

router.post("/", criar);

module.exports = router;

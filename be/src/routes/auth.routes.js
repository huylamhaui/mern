const express = require('express');
const { login, createAccount } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/', login);
router.post('/create', createAccount);

module.exports = router;
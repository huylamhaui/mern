const express = require('express');
const accountController = require('../controllers/account.controller');

const router = express.Router();

router.get('/', accountController.getAll);

router.post('/create', accountController.createAccount);


module.exports = router;
const express = require('express');
const { createCategory, loadListCategory, updateCategory } = require('../controllers/category.controller');

const router = express.Router();


router.get('/', loadListCategory);

router.post('/create', createCategory);

router.put('/update', updateCategory);

module.exports = router;
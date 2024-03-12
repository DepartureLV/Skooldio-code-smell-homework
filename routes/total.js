const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const total = require('../total')
const convert = require('../convert')

// Products Array
router.post('/', (req, res, next) => {
    const { body } = req;
    if (typeof body.name !== 'string') {
        return next(createError(400, 'Validation Error'));
    }
    var newId = products.length + 1;
    const newProduct = { id: "'" + newId + "'", name: body.name, inStock: false, };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

router.post('/total', (req, res) => {
    const { body } = req;
    var values = body.values;
    var result = total(values);
    var convertResult = convert(result);
    res.json(convertResult);
});

module.exports = router;
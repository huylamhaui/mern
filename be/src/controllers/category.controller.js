const Category = require('../models/Category');
const mongoose = require('mongoose');


const loadListCategory = async (req, res) => {
    try {
        const result = await Category.find();
        res.json({
            categories: result
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        let category = new Category({
            name, description
        });
        category = await category.save();
        res.json(category);
    } catch (error) {
        res.status(400).json(error);
    }
}


const updateCategory = async (req, res) => {
    try {
        const { _id, name, description } = req.body;
        let cateory = await Category.findById(_id);
        if (!cateory) {
            throw new Error("not found category with _id: " + _id);
        }
        category = await cateory.update({_id, name, description});
        return res.json(cateory);
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }

}

module.exports = {
    loadListCategory,
    createCategory,
    updateCategory
}
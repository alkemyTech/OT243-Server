const {CLIENT_ERROR} = require("../utils/httpCodes.js");
const CategoryService = require("../services/category.js");

export const getCategories = async (req,res) => {
    try {
        const categories = await CategoryService.findAll();
        res.json(categories);
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}
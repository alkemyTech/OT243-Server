const {CLIENT_ERROR,CREATED,DELETED, OK} = require("../utils/httpCodes.js");
const CategoryService = require("../services/category.js");

const getCategories = async (req,res) => {
    try {
        const { page } = req.query;
        const categories = await CategoryService.findAll(page);
        res.json(categories);
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}

const getCategory = async (req,res) => {
    try {
        const {id} = req.params;
        const category = await CategoryService.findByPk(id);
        res.json(category);
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}

const createCategory = async (req, res) => {
    try {
        //TODO:implementar el repositorio
        const { name } = req.body;
        const newCategory = await CategoryService.createCategory(name);
        res.status(CREATED).json(newCategory);
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}

const modifyCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const modifiedCategory = await CategoryService.updateCategory(id,req.body)
        res.json({msg:"category modified"})
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await CategoryService.deleteCategory(id);
        res.status(OK).json({deleted})
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}


module.exports= {
    getCategories,
    createCategory,
    modifyCategory,
    deleteCategory,
    getCategory,
    

}
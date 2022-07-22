const {CLIENT_ERROR,CREATED,DELETED} = require("../utils/httpCodes.js");
const CategoryService = require("../services/category.js");

const getCategories = async (req,res) => {
    try {
        const categories = await CategoryService.findAll();
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

const createCategory = async (req,res) => {
    try {
        //TODO:implementar el repositorio
        res.status(CREATED).json({msg:"category created"})
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}

const modifyCategory = async (req,res) => {
    try {
        const {id} = req.params;
        //TODO:implementar el repositorio
        res.json({msg:"category modified"})
    } catch (error) {
        res.status(CLIENT_ERROR).json(error);
    }
}

const deleteCategory = async (req,res) => {
    try {
        const {id} = req.params
         //TODO:implementar el repositorio
        res.status(DELETED).json({msg:"category deleted"})
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
const { Category } = require("../models");

class CategoryService{
    //TODO:implementar con el modelo adecuado
    static async findAll(){
        return await Category.findAll({attributes: ["name"]});
    }
    static async findByPk(id){
        return await Category.findByPk(id)
    }
}

module.exports = CategoryService;
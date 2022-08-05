const { Category } = require("../models");

class CategoryService{
    static async findAll(){
        return await Category.findAll({ attributes: ["name"] });
    }
    static async findByPk(id){
        return await Category.findByPk(id)
    }
    static async updateCategory(id, content){
        return await Category.update({ ...content }, { where: { id } })
    }
    static async createCategory(name){
        return await Category.create({ name })
    }
    static async deleteCategory(id){
        return await Category.destroy({ where: { id } })
    }
}

module.exports = CategoryService;
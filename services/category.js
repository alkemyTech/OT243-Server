const { Category } = require("../models");

//TODO: cambiar por una variable de entorno
const URL = "http://localhost:3000"
const getLinkPages = (actualPage, totalRegisters, registersPerPage) => {
    const totalPages = Math.ceil(totalRegisters / registersPerPage);
    const result = {}
    
    if(actualPage < totalPages) result.next = URL+`/categories?page=${actualPage+1}`;
    if(actualPage <= totalPages && actualPage > 1) result.ant = URL+`/categories?page=${actualPage-1}`;

    return result
}

class CategoryService{
    static async findAll(page=1){
        const total = await Category.count();
        const results = await Category.findAll({ attributes: ["name"],limit: 10,offset:(10*(page-1)) })
        return {total, results, ...getLinkPages(Number(page),total,10)}
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
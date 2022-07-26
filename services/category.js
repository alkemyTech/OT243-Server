

class CategoryService{
    //TODO:implementar con el modelo adecuado
    static async findAll(){
        return ["cat1","cat2"]
    }
    static async findByPk(id){
        return {name:"cat1"}
    }
}

module.exports = CategoryService;
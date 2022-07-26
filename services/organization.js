
const OrganizationModel =require('../models').Organization

class OrganizationService{
    static async getOneOrganization(id){ 
        
        const data= await OrganizationModel.findOne({
            where: { id },
            attributes: ['name', 'image', 'phone','address']
        });
        if(data=== null){
            return 'NOT FOUND'
        }else{
            return data
        }
    }
}


module.exports= OrganizationService
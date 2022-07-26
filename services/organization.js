
const OrganizationModel =require('../models').Organization

class OrganizationService{
    
    static async  upDateData(data , idUpdate){
        const result = await OrganizationModel.update(data , { where: { id: idUpdate } });
        if( result !=0){
            return 'update successfully '
        }else{
            return 'NOT FOUND '
        }
    }
}


module.exports= OrganizationService
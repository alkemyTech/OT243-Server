
const TestimonialModel = require("../models").Testimonial;

class TestimonialService {

static async deleteTestimonial(id){
    
    const testimonialFound=await TestimonialModel.findByPk(id)
    if(testimonialFound){
        const testimonialDeleted = await TestimonialModel.destory({where:{id}});
        if (testimonialDeleted) return 'deleted succeful'
    }
    return 'testimonial not found'
}
static async updateTestimonial(dataUpdate, id) {

    const updateTestimonial = await TestimonialModel.findByPk(id)

    if (!updateTestimonial) {
        return 'testimonial not found'
    }
    if (updateTestimonial) {
        updateTestimonial.update({
            name: !dataUpdate.name ? updateTestimonial.name : dataUpdate.name,
            // TODO  CHECKEAR  COMO LLEGA LA IMAGE
            image: !dataUpdate.image ? updateTestimonial.image : dataUpdate.image,
            content: !dataUpdate.content ? updateTestimonial.content : dataUpdate.content
        });

        return 'update successfully'
    } 



}

}
module.exports= TestimonialService
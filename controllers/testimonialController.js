const TestimonialService = require("../services/testimonial");

const httpCodes = require("../utils/httpCodes");


// GET ALL
const getAllTestimonials = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// GET ONE
const getTestimonial = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// POST


const createTestimonial = async (req, res) => {
  const data = {...req.body}
  try {
    const testimonialCreated = await TestimonialService.createTestimonial(data)
    res.status(httpCodes.OK).send({
      msg: testimonialCreated
    })
  
  } catch (error) {

    res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
  }


};

// UPDATE
const updateTestimonial = async (req, res) => {
  const id = req.params.id
  const dataUpdate = {
    ...req.body
  }
  try {
    const testimonalUpdate = await TestimonialService.updateTestimonial(dataUpdate, id)

    if( testimonalUpdate){
    res.status(httpCodes.OK).send({
      msg:testimonalUpdate
    });
  }
    else{
      res.status(httpCodes.RESOURCE_NOT_FOUND).send({
        msg:'resource  not found'
      })
    }

  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error);
  }


};

// DELETE


const deleteTestimonial = async (req, res) => {
  const {id}= req.params
  try {
    const testimonialDeleted= await TestimonialService.deleteTestimonial(id);
    res.status(httpCodes.OK).json({
      msg:testimonialDeleted
    });
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error);
  }

};

module.exports = {
  getAllTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
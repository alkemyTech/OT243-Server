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
const createTestimonial = (req, res) => {
  res.status(201).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// UPDATE
const updateTestimonial = async (req, res) => {
  const id = req.params.id
  const dataUpdate = {
    ...req.body
  }
  try {
    const testimonalUpdate = await TestimonialService.updateTestimonial(dataUpdate, id)
    res.status(httpCodes.OK).send({
      msg:testimonalUpdate
    });
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
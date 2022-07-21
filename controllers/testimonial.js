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
  const updateTestimonial = (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'This route is not yet defined!',
    });
  };
  
  // DELETE
  const deleteTestimonial = (req, res) => {
    res.status(204).json({
      status: 'success',
      message: 'This route is not yet defined!',
      data: null,
    });
  };
  
  module.exports = {
    getAllTestimonials,
    getTestimonial,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
  };
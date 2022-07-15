// GET ALL
const getAllUsers = (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'This route is not yet defined!',
    });
  };
  
  // GET ONE
  const getUser = (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'This route is not yet defined!',
    });
  };
  
  // POST
  const createUser = (req, res) => {
    res.status(201).json({
      status: 'success',
      message: 'This route is not yet defined!',
    });
  };
  
  // UPDATE
  const updateUser = (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'This route is not yet defined!',
    });
  };
  
  // DELETE
  const deleteUser = (req, res) => {
    res.status(204).json({
      status: 'success',
      message: 'This route is not yet defined!',
      data: null,
    });
  };
  
  module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  };
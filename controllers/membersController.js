

//GET ALL
const  getAllMembers = (req,res)=>{
    res.status(200).json({
        message: 'GetAll',
      });
}
//GET ONE
const  getMembers = (req,res)=>{
    res.status(200).json({
        message: 'GetOne',
      });
}

// POST
const createMembers = (req, res) => {
    res.status(201).json({
      message: 'Create',
    });
  };

  // UPDATE
const updateMembers = (req, res) => {
    res.status(200).json({
      message: 'Update',
    });
  };
  
  // DELETE
  const deleteMembers = (req, res) => {
    res.status(204).json({
      message: 'Delete',
    });
  };


  module.exports={
    getAllMembers,
    getMembers,
    createMembers,
    updateMembers,
    deleteMembers

  }
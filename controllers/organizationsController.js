//GET ALL
const  getAllOrganizations = (req,res)=>{
    res.status(200).json({
        message: 'GetAll Orgnaizations ',
      });
}
//GET ONE
const  getOrganizations = (req,res)=>{
    res.status(200).json({
        message: 'GetOne Orgnaizations !',
      });
}

// POST
const createOrganizations = (req, res) => {
    res.status(201).json({
      message: 'Create Organizations!',
    });
  };

  // UPDATE
const updateOrganizations = (req, res) => {
    res.status(200).json({
      message: 'Update Organizations!',
    });
  };
  
  // DELETE
  const deleteOrganizations = (req, res) => {
    res.status(204).json({
      message: 'Delete Organizations!',
    });
  };


  module.exports={
    getAllOrganizations,
    getOrganizations,
    createOrganizations,
    updateOrganizations,
    deleteOrganizations

  }

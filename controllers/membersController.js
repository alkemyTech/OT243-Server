const MemberService = require('../services/member');
const {
  OK,
  CREATED,
  DELETED,
  INTERNAL_SERVER_ERROR,
} = require('../utils/httpCodes');

//GET ALL
const getAllMembers = (req, res) => {
  res.status(200).json({
    message: 'GetAll',
  });
};
//GET ONE
const getMembers = (req, res) => {
  res.status(200).json({
    message: 'GetOne',
  });
};

// POST
const createMember = async (req, res) => {
  try {
    const newMember = await MemberService.create(req.body);
    res.status(CREATED).json({
      status: 'success',
      data: {
        member: newMember,
      },
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: err,
    });
  }
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

module.exports = {
  getAllMembers,
  getMembers,
  createMember,
  updateMembers,
  deleteMembers,
};

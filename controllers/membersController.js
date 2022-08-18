const MemberService = require('../services/member');
const { urlPages } = require('../utils/pagination');
const {
  OK,
  CREATED,
  DELETED,
  INTERNAL_SERVER_ERROR,
} = require('../utils/httpCodes');

//GET ALL
const getAllMembers = async (req, res) => {
  try {
    // Consult service
    const members = await MemberService.getAll(req.query);

    // PAGINATION
    // Pages: previous, current, next, total.
    const pages = urlPages(req, 'members');
    const totalPages = Math.ceil(members.count / req.query.size);

    res.status(OK).json({
      status: 'success',
      pages: {
        totalPages,
        ...pages,
      },
      data: {
        members: members.rows,
      },
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: `${err}`,
    });
  }
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
const updateMember = async (req, res) => {
  try {
    const memberUpdated = await MemberService.update(req.params, req.body);
    res.status(CREATED).json({
      status: 'success',
      data: {
        member: memberUpdated,
      },
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: err.message,
    });
  }
};

// DELETE
const deleteMember = async (req, res) => {
  try {
    await MemberService.delete(req.params);
    res.status(DELETED).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: err.message,
    });
  }
};

module.exports = {
  getAllMembers,
  getMembers,
  createMember,
  updateMember,
  deleteMember,
};

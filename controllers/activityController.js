const ActivityService = require('../services/activity');
const {
  OK,
  CREATED,
  DELETED,
  INTERNAL_SERVER_ERROR,
} = require('../utils/httpCodes');

// GET ALL
const getAllActivities = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// GET ONE
const getActivity = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// POST
const createActivity = async (req, res) => {
  try {
    const newActivity = await ActivityService.create(req.body);
    res.status(CREATED).json({
      status: 'success',
      data: {
        activities: newActivity,
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
const updateActivity = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// DELETE
const deleteActivity = (req, res) => {
  res.status(204).json({
    status: 'success',
    message: 'This route is not yet defined!',
    data: null,
  });
};

module.exports = {
  getAllActivities,
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity,
};

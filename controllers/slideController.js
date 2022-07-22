const { OK, CREATED, DELETED } = require('../utils/httpCodes');

module.exports = {
  getMembers: function(req,res) {
    res.status(OK).json({
      message: 'GetOne',
    });
  },
  createMembers: function(req, res) {
    res.status(CREATED).json({
      message: 'Create',
    });
  },
  updateMembers: function(req, res) {
    res.status(OK).json({
      message: 'Update',
    });
  },
  deleteMembers: function(req, res) {
    res.status(DELETED).json({
      message: 'Delete',
    });
  },
}

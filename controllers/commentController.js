const CommentService = require('../services/comment')
const httpCodes= require('../utils/httpCodes')

const getAllComments = async (req, res) => {
  try {
    const allComments = await CommentService.getAll();

    res.status(httpCodes.OK).json({
      msg: allComments,
    });
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json({msg:error});
  }
};

module.exports = {
  getAllComments,
};
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

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await CommentService.delete(id)
    res.status(httpCodes.OK).json({ msg: "deleted" })
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json({msg:error});
  }
}

const createComment = async (req, res) => {
  try {
    const created = await CommentService.create(req.body)
    res.status(httpCodes.CREATED).json({ msg: "created", ...created })
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json({msg:error});
  }
}
const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const updated = await CommentService.update(id, req.body)
    res.status(httpCodes.OK).json({ msg: "updated", ...updated })
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json({msg:error});
  }
}
module.exports = {
  getAllComments,
  deleteComment,
  createComment,
  updateComment,

};
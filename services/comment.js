const CommentModel = require("../models").Comment;


// controlar cuando el modelo tiene paranoid:true
class CommentService {
  static async getAll() {
    const comments = await CommentModel.findAll({
      attributes: ["body", "createdAt"],
      order: [["createdAt", "ASC"]],
    });
    if (comments.lenght > 0) {
      return comments;
    } else {
      return "Comments not Found";
    }
  }
}

module.exports = CommentService;

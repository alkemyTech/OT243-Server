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

  static async delete(id) {
    return await CommentModel.destroy({ where : { id } })
  }
  static async create(body) {
    return await CommentModel.create({...body});
  }
  static async update(id,body) {
    return await CommentModel.update({...body},{ where: { id } })
  }
}

module.exports = CommentService;

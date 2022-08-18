const { Member } = require('../models/index');

class MemberService {
  static async create(data) {
    const { name, facebookUrl, instagramUrl, linkedinUrl, image, description } =
      data;

    // Store member in Database
    return await Member.create({
      name,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      image,
      description,
    });
  }

  static async getAll(query) {
    // PAGINATION
    // 1. Parse query string to number
    const pageNum = +query.page;
    const sizeNum = +query.size;

    // 1.1 Data validation
    let page = 0;
    if (!Number.isNaN(pageNum) && pageNum > 0) {
      page = pageNum;
    }

    let size = 10;
    if (!Number.isNaN(sizeNum) && sizeNum > 0) {
      size = sizeNum;
    }
    console.log(size);
    // 1.2 List All Members
    return await Member.findAndCountAll({
      limit: size,
      offset: page * size,
    });
  }

  static async update({ id }, data) {
    const { name, content, image } = data;

    // Search in DB
    const member = await Member.findByPk(id);

    // Check if it exists or not
    if (!member) throw new Error('No member found with that ID');

    // Update member
    member.set({
      name,
      content,
      image,
    });
    await member.save();

    return member;
  }

  static async delete({ id }) {
    // Delete a member
    const member = await Member.destroy({
      where: {
        id,
      },
    });

    // Check if it exists or not
    if (!member) throw new Error('No member found with that ID');
    return 1;
  }
}

module.exports = MemberService;

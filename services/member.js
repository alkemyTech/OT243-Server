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
}

module.exports = MemberService;

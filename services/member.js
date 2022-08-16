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
}

module.exports = MemberService;

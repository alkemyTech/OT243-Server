const express = require('express');
const memberController = require('../controllers/membersController');
const { validateMember } = require('../validators/memberValidator');

const router = express.Router();

// TODO: getAll - Add protected route for admin.
router
  .route('/')
  .post(validateMember, memberController.createMember)
  .get(memberController.getAllMembers);

router
  .route('/:id')
  .put(memberController.updateMember)
  .delete(memberController.deleteMember);

module.exports = router;

const express = require('express');
const memberController = require('../controllers/membersController');
const { validateMember } = require('../validators/memberValidator');

const router = express.Router();

router.route('/').post(validateMember, memberController.createMember);

module.exports = router;

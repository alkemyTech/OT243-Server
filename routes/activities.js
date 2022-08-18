const express = require('express');
const activityController = require('../controllers/activityController');
const { validateActivity } = require('../validators/activitiesValidator');

const router = express.Router();

// TODO: Post: Implement Protected Route for admin
router.route('/').post(validateActivity, activityController.createActivity);
router.route('/:id').put(activityController.updateActivity);

module.exports = router;

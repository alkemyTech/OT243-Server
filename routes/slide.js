const express = require('express');
const { getSlide } = require('../controllers/slideController');
const { validateSlideGet } = require('../validators/slideValidator');
const router = express.Router();


/* GET Slice - URL: ../Slides/:id */
router.get('/:id', validateSlideGet, getSlide);

module.exports = router;
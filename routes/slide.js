const express = require('express');
const { getSlide, createSlide } = require('../controllers/slideController');
const { validateSlideGet, validateSlideCreate } = require('../validators/slideValidator');
const router = express.Router();


/* GET Slice - URL: ../Slides/:id */
router.get('/:id', validateSlideGet, getSlide);

/* POST Slice - URL: ../Slides */
router.post('/', validateSlideCreate, createSlide);

module.exports = router;
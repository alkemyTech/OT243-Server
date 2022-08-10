const express = require('express');
const { getSlide, createSlide, updateSlide } = require('../controllers/slideController');
const { validateSlideGet, validateSlideCreate, validateSlideUpdate } = require('../validators/slideValidator');
const router = express.Router();


/* GET Slice - URL: ../Slides/:id */
router.get('/:id', validateSlideGet, getSlide);

/* POST Slice - URL: ../Slides */
router.post('/', validateSlideCreate, createSlide);

/* PUT Slice - URL: ../Slides */
router.put('/:id', validateSlideUpdate, updateSlide);

module.exports = router;
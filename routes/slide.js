const express = require('express');
const { getSlide, createSlide, deleteSlide } = require('../controllers/slideController');
const { validateSlideGet, validateSlideCreate, validateSlideDelete } = require('../validators/slideValidator');
const router = express.Router();


/* GET Slice - URL: ../Slides/:id */
router.get('/:id', validateSlideGet, getSlide);

/* DELETE Slice - URL: ../Slides/:id */
router.delete('/:id', validateSlideDelete, deleteSlide);

/* POST Slice - URL: ../Slides */
router.post('/', validateSlideCreate, createSlide);

module.exports = router;
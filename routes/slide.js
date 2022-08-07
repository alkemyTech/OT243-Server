const express = require('express');
const { getSlide, deleteSlide } = require('../controllers/slideController');
const { validateSlideGet, validateSlideDelete } = require('../validators/slideValidator');
const router = express.Router();


/* GET Slice - URL: ../Slides/:id */
router.get('/:id', validateSlideGet, getSlide);

/* DELETE Slice - URL: ../Slides/:id */
router.delete('/:id', validateSlideDelete, deleteSlide);

module.exports = router;
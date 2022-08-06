const express = require('express');
const { getSlide, getListSlide } = require('../controllers/slideController');
const { validateSlideGet, validateSlideGetList } = require('../validators/slideValidator');
const router = express.Router();


/* GET List Slice - URL: ../Slides */
router.get('', validateSlideGetList, getListSlide);

/* GET Slice - URL: ../Slides/:id */
router.get('/:id', validateSlideGet, getSlide);


module.exports = router;
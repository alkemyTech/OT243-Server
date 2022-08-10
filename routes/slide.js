const express = require('express');
const { 
    getSlide,
    getListSlide,
    createSlide,
    updateSlide,
    deleteSlide
} = require('../controllers/slideController');
const {
    validateSlideGet,
     validateSlideGetList,
    validateSlideCreate,
    validateSlideUpdate,
    validateSlideDelete
} = require('../validators/slideValidator');
const router = express.Router();


/* GET List Slice - URL: ../Slides */
router.get('', validateSlideGetList, getListSlide);

/* GET Slice - URL: ../Slides/:id */
router.get('/:id', validateSlideGet, getSlide);

/* DELETE Slice - URL: ../Slides/:id */
router.delete('/:id', validateSlideDelete, deleteSlide);

/* POST Slice - URL: ../Slides */
router.post('/', validateSlideCreate, createSlide);

/* PUT Slice - URL: ../Slides */
router.put('/:id', validateSlideUpdate, updateSlide);

module.exports = router;
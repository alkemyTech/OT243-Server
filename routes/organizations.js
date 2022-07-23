const express = require('express');
const router = express.Router();
const {getOrganizations} = require('../controllers/organizationsController')

router.get('/public/:id', getOrganizations);



module.exports = router;

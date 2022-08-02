const express = require('express');
const router = express.Router();
const { getCategories, getCategory, modifyCategory } = require("../controllers/category.js");

router.get("/", getCategories);

router.get("/:id", getCategory);

router.put("/:id", modifyCategory);

module.exports = router;
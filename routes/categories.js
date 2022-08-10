const express = require('express');
const router = express.Router();
const {validateCreateCategory,validateDeleteCategory} = require("../validators/categoriesValitator");
const { getCategories, 
        getCategory, 
        modifyCategory, 
        createCategory, 
        deleteCategory,
} = require("../controllers/category.js");

router.get("/", getCategories);

router.get("/:id", getCategory);

router.post("/", validateCreateCategory, createCategory)

router.put("/:id", modifyCategory);

router.delete("/:id", validateDeleteCategory,deleteCategory)

module.exports = router;
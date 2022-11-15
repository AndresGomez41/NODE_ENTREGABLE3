
const { Router } = require("express");
const { deleteCategory, createCategory } = require("../Controllers/categories.controllers");

const router = Router();

router.post("/categories", createCategory);

router.delete("/categories/:id", deleteCategory);

module.exports = router;
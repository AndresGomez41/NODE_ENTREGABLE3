const CategoriesServices = require("../Services/categories.services");

const createCategory = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await CategoriesServices.addCategory(newUser);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params;
    const result = await CategoriesServices.delCategory(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createCategory,
  deleteCategory,
}
const Categories = require("../models/categories.models");


class CategoriesServices {

  static async addCategory(data) {
    try {      
      const result = await Categories.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delCategory(id) {
    try {      
      const result = await Categories.destroy({
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesServices;
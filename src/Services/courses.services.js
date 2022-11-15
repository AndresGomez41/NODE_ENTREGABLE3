const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");


class CoursesServices {

  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllInfo() {
    try {
      const result = await Courses.findAll({
        include: [
          {
            model: Videos,
            as: "videos",
            attributes: ["title", "url"],
          },
           {
            model: Categories,
            as: "categories",
            attributes: ["name"],
          }
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addCourse(dataCourse) {
    try {      
      const result = await Courses.create(dataCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateOneCourse(dataCourse, id) {
    try {      
      const { description } = dataCourse;
      const result = await Courses.update( { description }, 
        {
          where: id,
        });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;
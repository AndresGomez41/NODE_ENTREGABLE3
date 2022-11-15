const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses.models");



class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: ["id","first_name","last_name","email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk( id , {
        attributes: ["id","first_name","last_name","email"],
        include: {
          model: UsersCourses,
          as: "courses",
          attributes: ["course_id"],
          include:{
            model: Courses,
            as: "course",
            attributes: ["title"],          
          }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {      
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }


  static async addCourse(dataCourse) {
    try {      
      const result = await UsersCourses.create(dataCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(data, id) {
    try {      
      const { firstName, lastName, password } = data;
      const result = await Users.update(
        {
          firstName,
          lastName,
          password,
        },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
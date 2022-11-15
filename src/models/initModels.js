const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Users = require("./users.models");
const UsersCourses = require("./usersCourses.models");
const Videos = require("./videos.models");

const initModels = () => {

  Categories.belongsTo(Courses, { as: 'course', foreignKey: 'course_id'});
  Courses.hasMany(Categories, {as: 'categories', foreignKey: 'course_id'});

  Videos.belongsTo(Courses, { as: 'course', foreignKey: 'course_id'});
  Courses.hasMany(Videos, {as: 'videos', foreignKey: 'course_id'}); 

  UsersCourses.belongsTo(Courses, { as: 'course', foreignKey: 'course_id'});
  Courses.hasMany(UsersCourses, {as: 'users', foreignKey: 'course_id'}); 

  UsersCourses.belongsTo(Users, { as: 'user', foreignKey: 'user_id'});
  Users.hasMany(UsersCourses, {as: 'courses', foreignKey: 'user_id'}); 

  Users;
  Courses;
  Categories;
  Videos;
  UsersCourses;
}

module.exports = initModels;
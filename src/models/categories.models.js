const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("../models/courses.models");

const Categories = db.define("categories",{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Courses,
      key: "id",
    },
    allowNull: false,
    field: "course_id"
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
}
);

module.exports = Categories;
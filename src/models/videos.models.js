const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("../models/courses.models");

const Videos = db.define("videos",{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Courses,
      key: "id",
    },
    field: "course_id"
  },  
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
}
);

module.exports = Videos;
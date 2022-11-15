const CoursesServices = require("../Services/courses.services");

const getAllCourses = async (req, res, next) => {
  try {
    const result = await CoursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const getAllCoursesRelatedData= async (req, res, next) => {
  try {
    const result = await CoursesServices.getAllInfo();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const createCourse = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await CoursesServices.addCourse(newUser);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const updateCourse = async (req, res, next) => {
  try {
    const id = req.params;
    const data = req.body;
    const result = await CoursesServices.updateOneCourse( data, id );
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
 getAllCourses,
 getAllCoursesRelatedData,
 createCourse,
 updateCourse,
}
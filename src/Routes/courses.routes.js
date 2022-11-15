const { Router } = require("express");
const { getAllCourses, getAllCoursesRelatedData, createCourse, updateCourse } = require("../Controllers/courses.controllers");
const { route } = require("./users.routes");


const router = Router();

router.get("/courses", getAllCourses);

router.get("/courses/info", getAllCoursesRelatedData);

router.post("/courses", createCourse);

router.put("/courses/:id", updateCourse);

module.exports = router;
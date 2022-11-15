const { Router } = require("express");
const { 
  getAllUsers, getUserById, createUser, updateUser, updateUserById, createCourse,
} = require("../Controllers/users.controllers");



const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id/courses", getUserById);

router.post("/users", createUser);
router.post("/users/:id/courses", createCourse);

router.put("/users/:id", updateUserById);


module.exports = router;
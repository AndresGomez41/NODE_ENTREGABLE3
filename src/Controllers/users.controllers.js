const UserServices = require("../Services/users.services");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.addUser(newUser);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const createCourse = async (req, res, next) => {
  try {
    const newCourse = req.body;
    const result = await UserServices.addCourse(newCourse);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const updateUserById= async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = { firstName, lastName, password } = req.body;
    const result = await UserServices.updateUser( data , id );
    res.status(200).json({message: ' solo se actualizaron nombres y password '});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById, 
  createUser,
  updateUserById,
  createCourse,
}
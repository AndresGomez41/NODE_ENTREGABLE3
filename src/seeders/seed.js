const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/usersCourses.models");
const initModels = require("../models/initModels");
const db = require("../utils/database");

initModels();

const users = [
  { firstName: "Ian", lastName: "Rosas", email: "ian@gmail.com", password: "1234" },
  { firstName: "Andres", lastName: "Gomez", email: "and@gmail.com", password: "3456" },
  { firstName: "Julian", lastName: "Venegas", email: "julian@gmail.com", password: "7890" },
];

const courses = [
  { title: "pintura al oleo", description: "pintura avanzada para jovenes", instructor: "Jose Palomeque"},
  { title: "cocina oriental", description: "cocina oriental para adultos principiantes", instructor: "Emilia Kwon"},
  { title: "danza moderna", description: "danza moderna para adultos avanzados", instructor: "Alena Ivanov"},
];

const categories = [
  { courseId: 1, name: "arte"},
  { courseId: 1, name: "entretenimiento"},
  { courseId: 1, name: "manualidades"},
  { courseId: 2, name: "hogar"},
  { courseId: 2, name: "cocina"},
  { courseId: 3, name: "arte"},
  { courseId: 3, name: "entretenimiento"},
  { courseId: 3, name: "danza"},
];

const videos = [
  { courseId: 1 , title: "eleccion de pinceles", url: "www.youtube.com/wery234"},
  { courseId: 1 , title: "eleccion de oleos", url: "www.youtube.com/wer2we34"},
  { courseId: 2 , title: "ingredientes unicos", url: "www.youtube.com/wer2wel34"},
  { courseId: 2 , title: "tipos de utensilios especiales", url: "www.youtube.com/w2wer2p34"},
  { courseId: 3 , title: "pasos basicos", url: "www.youtube.com/wer2342j34"},
  { courseId: 3 , title: "rutina de calentamiento", url: "www.youtube.com/weghgwrm234"},
];

const usersCourses = [
  { userId: 1, courseId: 1},
  { userId: 1, courseId: 2},
  { userId: 2, courseId: 1},
  { userId: 2, courseId: 3},
  { userId: 3, courseId: 1},
  { userId: 3, courseId: 2},
  { userId: 3, courseId: 3},
];

db.sync({ force: true })
  .then(() => {
    console.log("Introduciendo datos a la DB cursos");

    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 200);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 300);

    setTimeout(() => {
      usersCourses.forEach((UC) => UsersCourses.create(UC));
    }, 400);
  })
  .catch( e => console.log(e));







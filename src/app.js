const express = require("express");
const initModels = require("./models/initModels");
const db = require('./utils/database');
const userRoutes = require('./Routes/users.routes');
const coursesRoutes = require('./Routes/courses.routes');
const videosRoutes = require('./Routes/videos.routes');
const categoriesRoutes = require('./Routes/categories.routes');
const handleError = require("./middlewares/error");

const PORT = 8000;
const app = express();
app.use(express.json());


db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({force: false}) 
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server"});
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${8000}`);
});
const express = require("express");
const sequelize = require("./util/database");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const projectRoutes = require("./routes/project");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", adminRoutes);
app.use("/", projectRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({ message: message, data: data });
});
app.use(cors(corsOptions));
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to Mysql is successful");
    app.listen(5050, () => {
      console.log("User Authentication and registration service");
      console.log("Server started on port 5050");
    });
  })
  .catch((err) => console.log(err));

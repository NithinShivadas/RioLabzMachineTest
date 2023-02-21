const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routerUser = require("./User/userRoute");
const routerFood = require("./FOOD/foodRoute");


const app = express();
app.use(cors({ origin: "http://localhost:4200" }));

app.use(express.json());

app.use("/api/users", routerUser);
app.use("/api/food", routerFood);

const mongoDB = "mongodb://localhost:27017/RioLabzFoodApp";

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => app.listen(3000))
  .then(() =>
    console.log("connected to Database and listening to localhost 3000")
  )
  .catch((err) => console.log(err));
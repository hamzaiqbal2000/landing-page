const subscribes = require("./routes/subscribes");
const students = require("./routes/students");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/landingPage")
  .then(() => console.log("Successfully connected to mongodb.."));

app.use(cors());
app.use(express.json());
app.use("/api/subscribes", subscribes);
app.use("/api/students", students);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on Port ${port}..`);
});

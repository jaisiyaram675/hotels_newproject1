const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./Models/Person");
require("dotenv").config();

const Menu = require("./Models/Menu");
//  this body-parser is a type of  express middleware
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Welcome to my our  hotel");
});


//  ab data send karne ke baad data lena bi toh hai



const personRoutes = require("./routes/personRoutes");
app.use("/Person", personRoutes);
const menuRoutes = require("./routes/menuRoutes");
app.use("/Menu", menuRoutes);
app.listen(3000, () => {
  console.log("listening on port 3000");
});

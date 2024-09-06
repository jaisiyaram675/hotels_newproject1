const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");
const Menu = require("./Models/Menu");
//  this body-parser is a type of  express middleware
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request made to : ${req.originalUrl}`
  );
  next();
};
app.use(logRequest);
// Authentication Middleware Function

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", {
  session: false,
});
app.get(
  "/",
  localAuthMiddleware,
  function (req, res) {
    res.send("Welcome to my our  hotel");
  }
);

app.set("trust proxy", true);

const personRoutes = require("./routes/personRoutes");
app.use("/Person", localAuthMiddleware, personRoutes);
const menuRoutes = require("./routes/menuRoutes");
app.use("/Menu", localAuthMiddleware, menuRoutes);
app.listen(PORT, () => {
  console.log("listening on port 3000");
});

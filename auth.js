
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Person = require("./Models/Person");
passport.use(
    new localStrategy(async (Username, password, done) => {
      try {
        console.log("Received credentials", Username, password);
        const user = await Person.findOne({ username: Username });
        if (!user) return done(null, false, { message: "Incorrect username." });
        const isPasswordMatch = user.password === password ? true : false;
        if (isPasswordMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password." });
        }
      } catch (err) {
        return done(err);
      }
    })
  );

module.exports= passport;
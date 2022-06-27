const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../db");
const validPassword = require("../lib/passwordUtils").validPassword;

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  User.findOne({ where: { username: username } })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  const user = await User.findAll({ where: { id: userId } });
  if (!user) done(err);
  done(null, user);
});

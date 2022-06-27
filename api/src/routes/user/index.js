const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../../lib/passwordUtils").genPassword;
const { User } = require("../../db");
const isAuth = require("./authMiddleware").isAuth;
const isAdmin = require("./authMiddleware").isAdmin;

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.send("User doesn't exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully authenticated");
      });
    }
  })(req, res, next);
});

router.post("/register", async (req, res, next) => {
  const saltHash = genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const emailUser = await User.findOne({ where: { username: req.body.email } });
  if (emailUser !== null) res.send({ message: "User already exists" });

  const newUser = await User.create({
    username: req.body.email,
    hash: hash,
    salt: salt,
    admin: true,
  });
  await newUser.save();
  res.send({ msg: "User registered successfully" });
});

router.get("/user", (req, res, next) => {
  console.log(req);
  res.send(req.user);
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.send({ message: "User logged out" });
});

router.get("/protected-route", isAuth, (req, res, next) => {
  res.send("You made it to the route.");
});
router.get("/admin-route", isAdmin, (req, res, next) => {
  res.send("You made it to the admin route.");
});

module.exports = router;

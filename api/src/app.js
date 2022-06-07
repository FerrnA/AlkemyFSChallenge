require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
//var crypto = require("crypto");
var passport = require("passport");
const pgSession = require("connect-pg-simple")(session);
const pg = require("pg");
require("./db.js");

/* Routes --> new /routes/index.js*/
const userTransactions = require("./routes/transactions/userTransactions.router.js");
const user = require("./routes/user/index.js");

const server = express();
server.name = "API";

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

/**
 * -------------- SESSION SETUP ----------------
 */
/* server.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      // Insert connect-pg-simple options here
    }),
    secret: "nosoyunanimal",
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    // Insert express-session options here
  })
);
*/
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// pool configuration https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pg/index.d.ts
const poolConfigOptions = {
  connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
};

const poolInstance = new pg.Pool(poolConfigOptions);

const pgStore = new pgSession({
  pool: poolInstance,
  createTableIfMissing: true,
});

server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: pgStore,
  })
);

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */
// Need to require the entire Passport config module so app.js knows about it
require("./config/passport");

server.use(passport.initialize());
server.use(passport.session());
server.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

/*-------------- ROUTES ----------------*/
server.use("/transactions", userTransactions);
server.use("/user", user);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

const { Router } = require("express");
const getAllTransactions = require("./getAllTransactions.controller");

const userTransactions = Router();

userTransactions.route("/").get(getAllTransactions);

module.exports = userTransactions;

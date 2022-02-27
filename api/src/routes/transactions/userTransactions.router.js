const { Router } = require("express");
const getAllTransactions = require("./getAllTransactions.controller");
const postTransaction = require("./postTransaction.controller");

const userTransactions = Router();

userTransactions.route("/").get(getAllTransactions);
userTransactions.route("/").post(postTransaction);

module.exports = userTransactions;

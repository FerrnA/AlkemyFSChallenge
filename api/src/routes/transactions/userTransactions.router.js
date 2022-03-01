const { Router } = require("express");
const getAllTransactions = require("./getAllTransactions.controller");
const postTransaction = require("./postTransaction.controller");
const getUserBalance = require("./getUserBalance.controller");
const updateTransaction = require("./updateTransaction.controller");
const destroyTransaction = require("./destroyTransaction.controller");

const userTransactions = Router();

userTransactions.route("/").get(getAllTransactions);
userTransactions.route("/").post(postTransaction);
userTransactions.route("/balance").get(getUserBalance);
userTransactions.route("/").put(updateTransaction);
userTransactions.route("/:transaction_id").delete(destroyTransaction);

module.exports = userTransactions;

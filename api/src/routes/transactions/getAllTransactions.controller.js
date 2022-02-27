const { Transaction } = require("../../db");

const getAllTransactions = async (req, res, next) => {
  try {
    const userTransactions = await Transaction.findAll({
      where: { id_user: 1 },
      attributes: ["date", "amount", "description", "type", "transaction_id"],
      order: [["date", "DESC"]],
    });
    const data = { userTransactions: userTransactions.slice(0, 10) };
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllTransactions;

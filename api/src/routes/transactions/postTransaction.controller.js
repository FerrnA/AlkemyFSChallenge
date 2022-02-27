const { Transaction } = require("../../db");

const postTransaction = async (req, res, next) => {
  try {
    const { amount, type, description } = req.body;
    const newdate = new Date();
    const newTransaction = await Transaction.create({
      date: newdate,
      amount,
      type,
      description,
    });
    await newTransaction.setUser(1);
    res.send({ msg: "transaccion exitosa!" });
  } catch (error) {
    next(error);
  }
};

module.exports = postTransaction;

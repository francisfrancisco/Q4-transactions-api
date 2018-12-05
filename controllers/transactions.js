const knex = require("../db/knex.js");

module.exports = {
  create: (req, res) => {
    let { user_id, amount, transaction_type, business_name } = req.body;
    knex("transactions")
      .insert({
        user_id,
        amount,
        transaction_type,
        business_name
      }, '*')
      .then(newTransaction => {
        res.json(newTransaction);
      })
      .catch(err => console.log(err));
  },
  delete: (req,res) => {
    knex('transactions').where('id', req.params.id)
    .del()
    .then(() => {
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  }
};

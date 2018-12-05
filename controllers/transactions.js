const knex = require("../db/knex.js");

module.exports = {

  update: (req, res) => {
    knex(transactions)
      .where('id', req.params.id)
      .update({
        amount: req.body.amount,
        transaction_type: req.body.transaction_type,
        business_name: req.body.business_name
      })
      .then( () => {
        res.sendStatus(200);
      })
  },
};

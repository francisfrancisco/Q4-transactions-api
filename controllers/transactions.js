const knex = require("../db/knex.js");

module.exports = {

    index: function(req, res) {
        knex('transactions')
        .then((results) => {
          res.json(results)
      })
     },
     getOne: (req,res) => {
        knex('transactions').where('id', req.params.id)
        .then((results) => {
          res.json(results[0])
        })
      }


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

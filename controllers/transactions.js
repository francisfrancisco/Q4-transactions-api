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
};

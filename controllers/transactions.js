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
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => {
        res.status(422).send({message: err})
      });
  },

  delete: (req,res) => {
    knex('transactions').where('id', req.params.id)
    .del()
    .then(() => {
        res.status(200).send({message:"Successfully deleted transaction!"})
      })
      .catch(err => {
        res.status(422).send({message: err})
      })
  },

  index: function(req, res) {
    let page = 1;
    if(req.query.page){
      page = Number(req.query.page)
    }
      knex('transactions').orderBy('id', 'asc').offset((page-1) * 50).limit(50)
      .then((results) => {
        res.json(results)
    }).catch((err) => {
      res.status(422).send({message: err})
    })
   },

   getOne: (req,res) => {
      knex('transactions').where('id', req.params.id)
      .then((results) => {
        res.json(results[0])
      }).catch((err) => {
        res.status(422).send({message: err})
      })
    },

  update: (req, res) => {
    knex('transactions')
      .where('id', req.params.id)
      .update({
        amount: req.body.amount,
        transaction_type: req.body.transaction_type,
        business_name: req.body.business_name
      },'*')
      .then((results) => {
        res.json(results[0])
      }).catch(err => {
        res.status(422).send({message: err})
      })
  }
};

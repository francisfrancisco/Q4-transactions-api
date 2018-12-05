const transactions = require("../controllers/transactions.js");


module.exports = function(app) {
  //users

  //transactions
  app.post('/api/transactions/:id', transactions.create);
  app.delete('/api/transactions/delete/:id', transactions.delete);
}

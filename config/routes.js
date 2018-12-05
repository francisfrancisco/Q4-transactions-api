const transactions = require("../controllers/transactions.js");


module.exports = function(app) {
  //users

  //transactions
  app.get('/transactions', transactions.index);
  app.get('/transactions/:id', transactions.getOne);
}

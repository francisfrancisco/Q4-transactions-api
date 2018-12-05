const transactions = require("../controllers/transactions.js");


module.exports = function(app) {
  //users

  //transactions
  app.patch('api/transactions/edit/:id', transactions.update);
  
}

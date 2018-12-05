const transactions = require("../controllers/transactions.js");


module.exports = function(app) {
  //users

  //transactions

  app.post('/api/transactions/:id', transactions.create);
  app.delete('/api/transactions/delete/:id', transactions.delete);
  app.get('/api/transactions', transactions.index);
  app.get('/api/transactions/:id', transactions.getOne);
  app.patch('/api/transactions/edit/:id', transactions.update);


}

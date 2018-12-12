const transactions = require("../controllers/transactions.js");
const users = require("../controllers/users.js");
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secret';

module.exports = function(app) {
  //users
  app.post('/users', users.create);
  app.post('/sessions', users.login);

  // app.use(verifyToken);
  //
  // app.get('/user', users.verify);
  //transactions

  app.post('/api/transactions', transactions.create);
  app.delete('/api/transactions/:id', transactions.delete);
  app.get('/api/transactions', transactions.index);
  app.get('/api/transactions/:id', transactions.getOne);
  app.patch('/api/transactions/:id', transactions.update);


  function verifyToken(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          return res.status(401).send({message: 'You are not authorized to view that resource, Please log in to continue.' });
        } else {
          // if everything is good, save to request for use in other routes
          delete decoded.password;
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(401).send({
          message: 'You are not authorized to view that resource, Please log in to continue.'
      });

    }
  }
}

const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require('cors');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const corsWhitelist = ['http://localhost:3000'];
let corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    if(corsWhitelist.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(null, false)
    }
  }
}
app.use(cors(corsOptions));

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

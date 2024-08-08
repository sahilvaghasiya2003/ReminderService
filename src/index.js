const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/server-config')

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, (req, res) => {
    console.log(`server running at ${PORT}`);
  });
};

setupAndStartServer();

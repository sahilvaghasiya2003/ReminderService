const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, (req, res) => {
    console.log(`server running at ${PORT}`);
    // sendBasicEmail(
    //   "support@gmail.com",
    //   "biyita2957@alientex.com",
    //   "TESTING EMAIL",
    //   "hey, how are you..."
    // );
  });
};

setupAndStartServer();

const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");
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
    //   "kotadiyachaitanya@gmail.com",
    //   "TESTING EMAIL",
    //   "hey, how are you..."
    // );

//scedular mail after every 10 second
    cron.schedule("*/5 * * * * *", () => {
      console.log("running a task every two minutes");
      sendBasicEmail(
        "support@gmail.com",
        "tyson83477@gmail.com",
        "TESTING EMAIL",
        "topa topa topa "
      );
    });
  });
};

setupAndStartServer();

const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const { PORT } = require("./config/server-config");
const { sendBasicEmail } = require("./services/email-service");
const jobs = require('./utils/job')
const TicketController = require('./controller/ticket-controller')

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post('/api/v1/tickets',TicketController.create)

  app.listen(PORT, (req, res) => {
    console.log(`server running at ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   "support@gmail.com",
    //   "kotadiyachaitanya@gmail.com",
    //   "TESTING EMAIL",
    //   "hey, how are you..."
    // );

//scedular mail after every 10 second
   
  });
};

setupAndStartServer();

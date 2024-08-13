const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const { PORT } = require("./config/server-config");
const { sendBasicEmail } = require("./services/email-service");
const jobs = require('./utils/job')
const EmailService = require('./services/email-service')
const {subscribeMessage, createChannel} = require('./utils/messageQueue');
const {REMINDER_BINDING_KEY } = require('./config/server-config')
const TicketController = require('./controller/ticket-controller')

const setupAndStartServer = async() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post('/api/v1/tickets',TicketController.create)

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents , REMINDER_BINDING_KEY);
  
  
  app.listen(PORT, (req, res) => {
    console.log(`server running at ${PORT}`);
    // jobs();
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

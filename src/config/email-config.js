const nodeMailer = require("nodemailer");
const {EMAIL_ID, EMAIL_PASSWORD} = require('./server-config')

const sender = nodeMailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASSWORD,
  },
});

module.exports = sender;

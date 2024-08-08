const sender = require("../config/email-config");

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
try {
  sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  }); 
} catch (error) {
  console.log(error);
}

};

module.exports = {
  sendBasicEmail,
};

/**
 * SMTP -> a@b.com
 * receiver -> c@d.com
 * 
 * from -> support@noti.com
 */
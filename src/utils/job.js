const cron = require("node-cron");
const emailService = require("../services/email-service");
const sender = require("../config/email-config");

/**
 * 10:00am
 * Every 5 minutes
 * we will check are their any pending emails which was expexted to be sent by now
 * and is pending
 */

const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailService.fetchPendingEmail();
    response.forEach((email) => {
      sender.sendMail({
        from: "ReminderService@airline.com",
        to: email.recepientEmail,
        subject: email.subject,
        text: email.content,
      }, async(err,data)=>{
        if(err){
          console.log(err);
        }else{
          console.log(data);
          await emailService.updateTicket(email.id, {status: "SUCCESS"})

        }
      });
    });
    console.log(response);
  });
};

module.exports = setupJobs;

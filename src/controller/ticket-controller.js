const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    console.log(req.body);
    const response = await TicketService.createNotification(req.body);
    res.status(201).json({
      data: response,
      success: true,
      message: "Successfully register an email",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "unable to register an email",
      err: error,
    });
  }
};

module.exports = { create };

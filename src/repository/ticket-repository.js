const { Op } = require("sequelize");
const { NotificationTicket } = require("../models/index");

class TicketRepository {
  async getAll() {
    try {
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      throw error;
    }
  }
  async create(data) {
    try {
      const tickets = await NotificationTicket.create(data);
      return tickets;
    } catch (error) {
      throw error;
    }
  }
  async update(ticketId,data){
    try {
        const tickets = await NotificationTicket.findByPk(ticketId);
        if(data.status)
            tickets.status = data.status;
        await tickets.save();
        return tickets;
      } catch (error) {
        throw error;
      }
  }

  async get(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketRepository;

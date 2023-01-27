const { ticketService } = require('../Services');



const addTicket = async (req, res) => {
   const {status, message} = await ticketService.addTicket(req.body);
   res.status(status).json(message);
  };

  const getTicket = async (req, res) => {
    const {status, message} = await ticketService.getTicket();
    res.status(status).json(message);
   };

   const getOneTicket = (async (req, res) => {
    const { status, message } = await ticketService.getOneTicket(req.params.id);
    res.status(status).json(message);
  });

   const updateTicket = async (req, res) => {
    const ticket = await ticketService.updateTicket(req.params.id, req.body);
    res.send(ticket);
  };

  const deleteTicket = async (req, res) => {
    const ticket = await ticketService.deleteTicket(req.params.id);
    res.send(ticket);
  };

  module.exports = {
    addTicket,
    getTicket,
    updateTicket,
    deleteTicket,
    getOneTicket
  }
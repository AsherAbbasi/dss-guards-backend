var express = require('express');
const ticketController = require('../Controller/ticket.controller');
const router = express.Router();


router
.route('/')
.post(ticketController.addTicket)
.get(ticketController.getTicket)


router
.route('/:id')
.put(ticketController.updateTicket)
.delete(ticketController.deleteTicket)

module.exports = router;

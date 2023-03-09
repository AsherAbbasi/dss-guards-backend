const { ticket } = require('../Models');

const addTicket = async (userBody) => {
  const response = await ticket.create(userBody);
  return { status: 200, message: response };
};

const getTicket = async () => {
  const response = await ticket.find();
  if (!response) {
    return { status: 401, message: 'You have no ticket' }
  }
  return { status: 200, message: response };
};

const getOneTicket = async (id) => {
  const response = await ticket.findById(id);
  if (!response) {
    return { status: 401, message: 'Something went wrong please try later!' }
  }
  return { status: 200, message: response };
};

const updateTicket = async (id, updateBody) => {
  const response = await ticket.findById(id);
  if (!response) {
    return { status: 401, message: 'Something went wrong please try later!' }
  }
  Object.assign(response, updateBody);
  await response.save();
  return response;
};

const deleteTicket = async (id) => {
  const data = await ticket.findById(id);
  if (data) {
    await data.remove();
    return { status: 200, message: data };
  }
  return { status: 401, message: 'ticket not found' }
};

module.exports = {
  addTicket,
  getTicket,
  updateTicket,
  deleteTicket,
  getOneTicket
}
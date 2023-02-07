const { reservationService } = require('../Services');
const httpStatus = require('http-status');
const emailService = require('../Services/email.service')
const catchAsync = require('../utils/catchAsync');


const createReservation = catchAsync(async (req, res) => {
  const { status, message } = await reservationService.createReservation(req.body);
  res.status(status).json(message);
});


const sendVerificationEmail = catchAsync(async (req, res) => {
  const email = await emailService.sendConfirmationEmail(req.body);
  res.status(httpStatus.OK).send(email);
});

const getParkingReservation = catchAsync(async (req, res) => {
  const { id } = req.user;
  const { status, message } = await reservationService.getParkingReservation(id);
  res.status(status).json(message);
});

const getOneReservation = catchAsync(async (req, res) => {
  const { status, message } = await reservationService.getOneReservation(req.params.id);
  res.status(status).json(message);
});

const deleteParkingPermits = catchAsync(async (req, res) => {
  const { status, message } = await reservationService.deleteParkingPermits(req.params);
  res.status(status).json(message);
});


module.exports = {
  createReservation,
  getParkingReservation,
  deleteParkingPermits,
  sendVerificationEmail,
  getOneReservation,
}
const { reservationService } = require('../Services');
const httpStatus = require('http-status');
const emailService=require ('../Services/emai.service')



const createReservation = (async (req, res) => {
    const {status, message} = await reservationService.createReservation(req.body);
    res.status(status).json(message);
   });
   const sendVerificationEmail = async (req, res) => {
    console.log('message', req.body);
    await emailService.sendVerificationEmail(req.body);
    res.status(httpStatus.NO_CONTENT).send();
  };

   const getParkingReservation = (async (req, res) => {
    const {status, message} = await reservationService.getParkingReservation();
    res.status(status).json(message);
   });

   const deleteParkingPermits =(async (req, res) => {
    const {status, message}= await reservationService.deleteParkingPermits(req.params);
    res.status(status).json(message);
  });


   module.exports={
    createReservation,
    getParkingReservation,
    deleteParkingPermits,
    sendVerificationEmail,
   }
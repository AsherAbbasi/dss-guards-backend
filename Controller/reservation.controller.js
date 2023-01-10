const { reservationService } = require('../Services');


const createReservation = (async (req, res) => {
    const {status, message} = await reservationService.createReservation(req.body);
    res.status(status).json(message);
   });

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
   }
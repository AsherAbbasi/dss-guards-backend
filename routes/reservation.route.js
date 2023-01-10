var express = require('express');
const reservationController= require ('../Controller/reservation.controller')
const router = express.Router();

router
.route('/')
.post(reservationController.createReservation)
.get(reservationController.getParkingReservation)

router
.route('/:id')
.delete(reservationController.deleteParkingPermits)


module.exports = router;
var express = require('express');
const reservationController= require ('../Controller/reservation.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router
.route('/')
.post(reservationController.createReservation)
.get(auth('AdminView'),reservationController.getParkingReservation)
router.post('/email', reservationController.sendVerificationEmail);


router
.route('/:id')
.get(reservationController.getOneReservation)
.delete(reservationController.deleteParkingPermits)


module.exports = router;
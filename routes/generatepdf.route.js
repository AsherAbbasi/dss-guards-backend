var express = require('express');
const pdfController= require ('../Controller/generatepdf.controller');
const router = express.Router();


router.route('/ticket/:id').get(pdfController.ticketPDF);
router.route('/reservation/:id').get(pdfController.reservationPDF)



module.exports = router;
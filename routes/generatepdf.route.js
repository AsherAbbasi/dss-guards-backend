var express = require('express');
const pdfController= require ('../Controller/generatepdf.controller');
const router = express.Router();


router
.route('/:id').get(pdfController.generatePDF);


module.exports = router;
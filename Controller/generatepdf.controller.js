const { generatepdf } = require('../services');

const ticketPDF = (async (req, res) => {
    const pdfDoc = await generatepdf.ticketPDF(req.params.id);
    res.contentType('application/pdf');
    res.send(pdfDoc);
});

const reservationPDF = (async (req, res) => {
    const pdfDoc = await generatepdf.reservationPDF(req.params.id);
    res.contentType('application/pdf');
    res.send(pdfDoc);
});
module.exports = {
    ticketPDF,
    reservationPDF,
  };
  
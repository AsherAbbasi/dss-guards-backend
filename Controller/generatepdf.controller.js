const { generatepdf } = require('../services');
const catchAsync = require('../utils/catchAsync');

const ticketPDF = catchAsync(async (req, res) => {
    const pdfDoc = await generatepdf.ticketPDF(req.params.id);
    res.contentType('application/pdf');
    res.send(pdfDoc);
});

const reservationPDF = catchAsync(async (req, res) => {
    const pdfDoc = await generatepdf.reservationPDF(req.params.id);
    res.contentType('application/pdf');
    res.send(pdfDoc);
});
module.exports = {
    ticketPDF,
    reservationPDF,
};

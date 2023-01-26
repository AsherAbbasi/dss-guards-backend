const { generatepdf } = require('../services');

const generatePDF = (async (req, res) => {
    const pdfDoc = await generatepdf.generatePDF(req.params.id);
    res.contentType('application/pdf');
    res.send(pdfDoc);
});


module.exports = {
    generatePDF,
  };
  
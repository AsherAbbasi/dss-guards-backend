const pdfMaker = require('../utils/pdfmaker');
const { getOneTicket } = require('../Services/ticket.service') 
const moment = require('moment');


const generatePDF = async (id) => {
    const {message} = await getOneTicket(id);
    const array = [];
    array.push(message)
    const reports = array?.map(({ name, date, timeFrom, timeTo , licensedPlateNumber , province,make,city,location,voilation,law,comments,penaltyAmount,officerNo,unit,createdAt }) => [
      name || 'N/A',
      date || 'N/A',
      timeFrom || 'N/A',
      timeTo || 'N/A',
      licensedPlateNumber || 'N/A',
      province || 'N/A',
      make || 'N/A',
      city || 'N/A',
      location || 'N/A',
      voilation || 'N/A',
      law || 'N/A',
      comments || 'N/A',
      penaltyAmount || 'N/A',
      officerNo || 'N/A',
      unit || 'N/A',
      moment(createdAt).format('MM/DD/YYYY'),
    ]);
    return pdfMaker(id, reports);
  };

  module.exports = {
    generatePDF,
  };
  
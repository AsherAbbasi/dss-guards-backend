const pdfMaker = require('../utils/pdfmaker');
const { getReservation } = require('../Services/reservation.service') 
const moment = require('moment');


const generatePDF = async (id) => {
    const {message} = await getReservation(id);
    const array = [];
    array.push(message)
    const reports = array?.map(({ buildingCode, buildingAddress, name, email , contactNumber, buildingUnits , createdAt }) => [
      buildingCode || 'N/A',
      buildingAddress || 'N/A',
      name || 'N/A',
      email || 'N/A',
      contactNumber || 'N/A',
      buildingUnits,
      moment(createdAt).format('MM/DD/YYYY'),
    ]);
    return pdfMaker(id, reports);
  };

  module.exports = {
    generatePDF,
  };
  
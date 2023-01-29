const ticketPDFMaker = require('../utils/ticketPDF');
const reservationPDFMaker = require('../utils/reservationPDF');

const { getOneTicket } = require('../Services/ticket.service') 
const { getOneReservation } = require('../Services/reservation.service') 

const moment = require('moment');


const ticketPDF = async (id) => {
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
    return ticketPDFMaker(id, reports);
  };

  const reservationPDF = async (id) => {
    const {message} = await getOneReservation(id);
    const array = [];
    array.push(message)
    const reports = array?.map(({ buildingCode, buildingAddress, name, email , contactNumber , buildingUnits,vehicleModel,licensedPlateNumber,vehicleColor,Make,dateFrom,dateTo,timeFrom,timeTo}) => [
      buildingCode || 'N/A',
      buildingAddress || 'N/A',
      name || 'N/A',
      email || 'N/A',
      contactNumber || 'N/A',
      buildingUnits || 'N/A',
      vehicleModel || 'N/A',
      licensedPlateNumber || 'N/A',
      vehicleColor || 'N/A',
      Make || 'N/A',
      dateFrom || 'N/A',
      dateTo || 'N/A',
      timeFrom || 'N/A',
      timeTo || 'N/A',
      // moment(createdAt).format('MM/DD/YYYY'),
    ]);
    return reservationPDFMaker(id, reports);
  };

  module.exports = {
    ticketPDF,
    reservationPDF,
  };
  
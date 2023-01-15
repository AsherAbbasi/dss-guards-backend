const sgMail = require('@sendgrid/mail');
const httpStatus = require('http-status');
const {
  sendgridApiKey,
  email: { from },
//   frontendURL,
} = require('../config/config');
// const ApiError = require('../utils/ApiError');

sgMail.setApiKey(sendgridApiKey);
const sendEmail = async (msg) => {

  try {
    return sgMail.send(msg);
  } catch (error) {
    console.log(error)
    return { status: 401, message: 'Message Not Sent!' }
  }
};


const sendConfirmationEmail = (body) => {
  const subject = 'Parking Permit Request!';
  const html = `
  <div style="margin:2px;padding:12px;background-color:#faf611">
  <h2 style="color:Red;text-align:center;">DIGITAL SAFEGUARD SECURITY INC</h2>
  <h3 style="color:Green;">Parking Permit</h3>
  <div>
  <div style="margin-bottom:12px"></div>
  <h3 style="color:brown;text-align:center;border-bottom:2px solid red"> Personal Information</h3>

  <h4>Name: ${body.name}<h4>
  <h4>Email: ${body.email}<h4>
  <h4>Contact Number: ${body.contactNumber}</h4>

  <h3 style="color:brown;text-align:center;border-bottom:2px solid red"> Building Information</h3>

  <h4>Building Code: ${body.buildingCode}</h4>
  <h4>Contact Number: ${body.contactNumber}</h4>
  <h4> Building Code: ${body.buildingCode}</h4>
  <h4> Building Address: ${body.buildingAddress}</h4>
  <h4> Unit visiting: ${body.buildingAddress}</h4>

  <h3 style="color:brown;text-align:center;border-bottom:2px solid red"> Vehicle Information</h3>
  
  <h4> Licensed Plate Number: ${body.licensedPlateNumber}</h4>

  <h3 style="color:brown;text-align:center;border-bottom:2px solid red"> Date</h3>

  <h4> From ${body.dateFrom} to  ${body.dateTo}</h4>

  <h3 style="color:brown;text-align:center;border-bottom:2px solid red"> Time </h3>

  <h4> From ${body.timeFrom} to  ${body.timeTo}</h4>
  </div>
  </div>`;
  const msg = { from, to: "iamibadd@gmail.com", subject, html };
  return sendEmail(msg);
};

module.exports = {
    sendConfirmationEmail,
};
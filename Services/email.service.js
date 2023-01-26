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
  function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
  };
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
  <div style="margin:2px;padding:12px;border:1px solid green;background-color:#e8c113;">
  <img src="https://dssguards.com/wp-content/uploads/2021/03/logo-2.jpg" alt="logo"/>
  <h2 style="color:Red;text-align:center;">DIGITAL SAFEGUARD SECURITY INC</h2>
  <h3 style="color:Green;">Parking Permit</h3>
  <div>
  <div style="margin-bottom:12px"></div>
  <h3 style="color:white;text-align:center;border:1px solid gray;background-color:black ;padding:8px"> Visitor Information</h3>

  <h4>Name: ${body.name}<h4>
  <h4>Email: ${body.email}<h4>
  <h4>Contact Number: ${body.contactNumber}</h4>

  <h3 style="color:white;text-align:center;border:1px solid gray;background-color:black;padding:8px"> Building Information</h3>

  <h4> Building Code: ${body.buildingCode}</h4>
  <h4> Building Address: ${body.buildingAddress}</h4>
  <h4> Unit visiting: ${body.buildingUnits}</h4>

  <h3 style="color:white;text-align:center;border:1px solid gray;background-color:black;padding:8px"> Vehicle Information</h3>
  
  <h4> Licensed Plate Number: ${body.licensedPlateNumber}</h4>
  <h5>Make: ${body.Make}
  <h5>Color: ${body.vehicleColor} 

  <h3 style="color:white;text-align:center;border:1px solid gray;background-color:black; padding:8px"> Date</h3>

  <h4> From: ${body.dateFrom} to: ${body.dateTo}</h4>

  <h3 style="color:white;text-align:center;border:1px solid gray;background-color:black;padding:8px"> Time </h3>

  <h4> From: ${body.timeFrom} to:  ${body.timeTo}</h4>

  <p style="text-align:center";>https://dssguards.com<p>
  </div>
  </div>`;
  
  
  if (body.email) {
      const msg = { from, to: [body.email,'asherabbasi44@gmail.com'], subject, html };
      return sendEmail(msg);
  }
  else{
    const msg = { from, to: 'asherabbasi44@gmail.com', subject, html };
    return sendEmail(msg);
  }
};

module.exports = {
    sendConfirmationEmail,
};
const sgMail = require('@sendgrid/mail');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, '../env')});

sgMail.setApiKey("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");
const msg = {
  to: 'asherabbasi44@gmail.com',
  from: 'Parking@dssguards.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();
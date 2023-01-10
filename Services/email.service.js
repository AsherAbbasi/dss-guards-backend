// const nodemailer = require('nodemailer');
// const config = require('../config/config');

// const transport = nodemailer.createTransport(config.email.smtp);
// /* istanbul ignore next */
// if (config.env !== 'test') {
//   transport
//     .verify()
//     .then(() => logger.info('Connected to email server'))
//     .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
// }


// const sendEmail = async (to, subject, text) => {
//     const msg = { from: config.email.from, to, subject, text };
//     await transport.sendMail(msg);
//   };

//   module.exports = {
//     sendEmail,
//   };
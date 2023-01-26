const PdfPrinter = require('pdfmake');
const moment = require('moment');
const { getReservation } = require('../Services/reservation.service') 

const fonts = {
  Roboto: {
    // fonts folder should be in the root directory
    normal: 'fonts/roboto/Roboto-Regular.ttf',
    bold: 'fonts/roboto/Roboto-Medium.ttf',
    italics: 'fonts/roboto/Roboto-Italic.ttf',
    bolditalics: 'fonts/roboto/Roboto-MediumItalic.ttf',
  },
};

module.exports = async (userId, tableData) => {
  let name;
  let email;
  if (typeof userId !== 'object') {
    const {message} = await getReservation(userId);
    name = message.name;
    email = message.email;
  } else {
    name = user.name;
    email = user.email;
  }
  const dssReports = {
    watermark: {
      text: 'Verified by Dss guards',
      color: 'green',
      opacity: 0.1,
      italics: false,
      fontSize: 50,
      angle: 0,
    },
    content: [
      { text: 'Parking Reservation Report', style: 'title' },
      { text: `Name: ${name}`, style: 'dynamicText' },
      { text: `Email: ${email}`, style: 'dynamicText' },
      {
        style: 'table',
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: 'buildingCode',
                style: 'tableHeader',
              },
              {
                text: 'buildingAddress:',
                style: 'tableHeader',
              },
              {
                text: 'name',
                style: 'tableHeader',
              },
              {
                text: 'email',
                style: 'tableHeader',
              },
              {
                text: 'contactNumber',
                style: 'tableHeader',
              },
              {
                text: 'buildingUnits',
                style: 'tableHeader',
              },
              {
                text: 'createdAt',
                style: 'tableHeader',
              },
            ],
            ...tableData,
          ],
        },
      },
      { text: `For more information please visit` },
    ],
    styles: {
      title: {
        alignment: 'center',
        fontSize: 20,
      },
      table: {
        margin: [0, 5, 0, 15],
      },
      dynamicText: {
        fontSize: 12,
      },
      subheader: {
        alignment: 'center',
        margin: [0, 10, 0, 15],
      },
      tableHeader: {
        fontSize: 13,
        color: 'black',
      },
    },
  };
  return new Promise((resolve) => {
    const printer = new PdfPrinter(fonts);
    const pdfDoc = printer.createPdfKitDocument(dssReports);
    const chunks = [];
    pdfDoc.on('data', (chunk) => chunks.push(chunk));
    pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
    pdfDoc.end();
  });
};

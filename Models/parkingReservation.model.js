const mongoose = require('mongoose');
// const { toJSON } = require('./plugins');
// const { tokenTypes } = require('../config/tokens');

const parkingReservationSchema = mongoose.Schema(
  {
    buildingCode: {
      type: String,
      required: true,
    },
    buildingAddress: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required: false,
    },
    contactNumber: {
      type: String,
      required:true,
    },
    unitVisiting: {
        type: String,
        required: true,
      },
      vehicleModel: {
        type: String,
        required: false,
      },
      licensedPlateNumber: {
        type: String,
        required:true,
      },
      vehicleColor: {
        type: String,
        required: false,
      },
      Make: {
        type: String,
        required:false,
      },
      dateFrom: {
        type: String,
        required: true,
      },
      dateTo: {
        type: String,
        required:true,
      },
      timeFrom: {
        type:String,
        required: true,
      },
      timeTo: {
        type:String,
        required:true,
      },
  },
  {
    timestamps: true,
  }
);


const parkingReservation = mongoose.model('parkingReservation', parkingReservationSchema);

module.exports = parkingReservation;

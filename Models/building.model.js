const mongoose = require('mongoose');

const buildingSchema = mongoose.Schema(
  {
    buildingCode: {
      type: String,
      required: true,
    },
    buildingAddress: {
      type: String,
      required: true,
    },
    buildingUnits: {
      type: [String],
      required: true,
    },
    parkingSlots: {
        type: String,
        required: true,
      }, 
  },
  {
    timestamps: true,
  }
  
);



const building = mongoose.model('building', buildingSchema);

module.exports = building;

const mongoose = require('mongoose');

const buildingUnitsSchema = mongoose.Schema(
  {
    buildingCode: {
      type: String,
      required: true,
    },
    buildingUnits: {
      type: String,
      required: true,
    },
    parkingSlots: {
        type: Number,
        default:3,
        required: true,
      }, 
  },
  {
    timestamps: true,
  }
  
);



const buildingUnit = mongoose.model('buildingUnit', buildingUnitsSchema);

module.exports = buildingUnit;

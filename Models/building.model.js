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
// superUserSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// };


const building = mongoose.model('building', buildingSchema);

module.exports = building;

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name:{
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      // required: true,
    },
    buildingCode: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);
// superUserSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// };


const user = mongoose.model('User', userSchema);

module.exports = user;

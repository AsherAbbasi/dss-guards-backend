const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    buildingCode: {
        type: String,
        required: true,
      }, 
      role: {
        type: String,
        required: true,
      }, 
  },
  {
    timestamps: true,
  }
  
);



const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;

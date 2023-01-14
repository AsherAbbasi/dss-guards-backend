// const { employee,building } = require('../Models');
// const httpStatus = require('http-status');
// var ObjectID = require('mongodb').ObjectID;


// const AddEmployee = async (userBody) => {
//   const { buildingCode } = userBody
//   const data = await building.findOne({ buildingCode });
//   if (!data) {
//     return { status: 401, message: 'Building Not Found' }
//   }
//   const response = await employee.create(userBody);
//   return { status: 200, message: response };
// };

// const getAllEmployee = async () => {
//   const response = await employee.find().sort({createdAt : -1});
//   if (response) {
//     return { status: 200, message: response };
//   }
//   return { status: 401, message: ' Not found' }
// };


// const deleteEmployeeById = async (_id) => {
//   const data = await employee.findOne(ObjectID(_id));
//   if (data) {
//     await data.remove();
//     return { status: 200, message: data };
//   }
//   return { status: 401, message: 'Not Found' }
// };


// // const getEmployee = async () => {
// //   const response = await employee.findOne().sort({createdAt : -1});
// //   if (response) {
// //     return { status: 200, message: response };
// //   }
// //   return { status: 401, message: ' Not found' }
// // };

// module.exports = {
//     AddEmployee,
//     // getEmployee,
//     getAllEmployee,
//     deleteEmployeeById
// }

const { user } = require('../Models');
const httpStatus = require('http-status');

// const createUser = async (userBody) => {
//   // if (await Superuser.isEmailTaken(userBody.email)) {
//   //   alert('Email already taken');
//   // }
//   return user.create(userBody);
// };


const getUserByEmailPassword = async (email, password) => {
    const response = await user.findOne({email, password});
    if(response) {
      return {status: 200, message: response};
    }
    return {status: 401, message: 'Invalid Email Or Password'}
  };

 

  module.exports={
    // createUser,
    getUserByEmailPassword,
  }

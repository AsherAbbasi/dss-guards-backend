const { user } = require('../Models');
const httpStatus = require('http-status');
const { generateAuthTokens } = require('./tokens.service')

// const createUser = async (userBody) => {
//   // if (await user.isEmailTaken(userBody.email)) {
//   //   return {status: 401, message: 'Email already taken'};
//   // }
//   return user.create(userBody);
// };

const getUserById = async (id) => {
  const response = await user.findById(id);
  return {status: 200, message: response};
};

const getUserByEmailPassword = async (email, password) => {
    const response = await user.findOne({email, password});
    if(!response) {
    return {status: 401, message: 'Invalid Email Or Password'}

    }
    const token = await generateAuthTokens(response);
    return {status: 200, message: {response , token}};

  };

  const getAllUser = async () => {
    const response = await user.find();
    if(response) {
      return {status: 200, message: response};
    }
    return {status: 401, message: 'No User Found'}
  };

 

  module.exports={
    // createUser,
    getUserById,
    getAllUser,
    getUserByEmailPassword,
  }

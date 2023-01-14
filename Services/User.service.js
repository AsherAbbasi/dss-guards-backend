const { user,building } = require('../Models');
const httpStatus = require('http-status');
const { generateAuthTokens } = require('./tokens.service')
var ObjectID = require('mongodb').ObjectID;


const AddUser = async (userBody) => {
  if(userBody.role==="Admin"){
    const response = await user.create(userBody);
    return { status: 200, message: response };
  }
  const { buildingCode } = userBody
  const data = await building.findOne({ buildingCode });
  if (!data) {
    return { status: 401, message: 'Building Not Found' }
  }
  const response = await user.create(userBody);
  return { status: 200, message: response }
};

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
    const response = await user.find().sort({createdAt : -1});
    if(response) {
      return {status: 200, message: response};
    }
    return {status: 401, message: 'No User Found'}
  };

  const deleteUserById = async (_id) => {
    const data = await user.findOne(ObjectID(_id));
    if (data) {
      await data.remove();
      return { status: 200, message: data };
    }
    return { status: 401, message: 'Not Found' }
  };

  module.exports={
    AddUser,
    getUserById,
    getAllUser,
    getUserByEmailPassword,
    deleteUserById

  }

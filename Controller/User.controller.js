
const httpStatus = require('http-status');
const { UserService } = require('../Services');
const ApiError = require('../utils/ApiErrors');
const catchAsync = require('../utils/catchAsync');


const AddUser = catchAsync(async (req, res) => {
  const { status, message } = await UserService.AddUser(req.body);
  res.status(status).json(message);
});

const getUserByEmailPassword = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const { status, message } = await UserService.getUserByEmailPassword(email, password);
  res.status(status).json(message);
});

const getAllUser = catchAsync(async (req, res) => {
  const { status, message } = await UserService.getAllUser();
  res.status(status).json(message);
});


const getUser = catchAsync(async (req, res) => {
  const user = await UserService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});
const updateUser = catchAsync(async (req, res) => {
  const user = await UserService.updateUser(req.params.id, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  const { status, message } = await UserService.deleteUserById(req.params.id);
  res.status(status).json(message);
});

module.exports = {
  AddUser,
  getUser,
  getAllUser,
  getUserByEmailPassword,
  updateUser,
  deleteUser

}

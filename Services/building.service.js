const { building } = require('../Models');
const httpStatus = require('http-status');
const { findOne } = require('../Models/User.model');



const createBuilding = async (userBody) => {
  const { buildingCode } = userBody
  const data = await building.findOne({ buildingCode });
  if (data) {
    return { status: 401, message: 'Building already in use' }
  }
  const response = await building.create(userBody);
  return { status: 200, message: response };
};

const getBuildings = async () => {
  const response = await building.find().sort({createdAt : -1});
  if (response) {
    return { status: 200, message: response };
  }
  return { status: 401, message: 'Building Not found' }
};

const getBuildingByCode = async (buildingCode) => {
  const response = await building.findOne({buildingCode});
  if (response) {
    return { status: 200, message: response };
  }
  return { status: 401, message: 'Building Not found' }
};

const deleteBuildingByCode = async (buildingCode) => {
  const data = await building.findOne({ buildingCode });
  if (data) {
    await data.remove();
    return { status: 200, message: data };
  }
  return { status: 401, message: 'Building Not found' }
};

const updateBuilding = async (buildingCode,updateBody) => {
  const response = await building.findOne({buildingCode});
  if (!response) {
    return { status: 401, message: 'Something went wrong please try later!' }
  }
  Object.assign(response, updateBody);
  await response.save();
  return response;
};


module.exports = {
  createBuilding,
  getBuildings,
  deleteBuildingByCode,
  getBuildingByCode,
  updateBuilding
}

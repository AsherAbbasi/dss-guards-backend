
const httpStatus = require('http-status');
const { buildingService } = require('../Services');
const ApiError = require('../utils/ApiErrors');
const catchAsync = require('../utils/catchAsync');


const createBuilding = catchAsync(async (req, res) => {
  const { status, message } = await buildingService.createBuilding(req.body);
  res.status(status).json(message);
});


const getBuildings = catchAsync(async (req, res) => {
  const { role, id } = req.user;
  const { status, message } = await buildingService.getBuildings(role, id);
  res.status(status).json(message);
});

const getBuildingByCode = catchAsync(async (req, res) => {
  const { status, message } = await buildingService.getBuildingByCode(req.params);
  res.status(status).json(message);
});


const deleteBuilding = catchAsync(async (req, res) => {
  const { buildingCode } = req.params
  const { status, message } = await buildingService.deleteBuildingByCode(buildingCode);
  res.status(status).json(message);
});

const updateBuilding = catchAsync(async (req, res) => {
  const { buildingCode } = req.params
  const building = await buildingService.updateBuilding(buildingCode, req.body);
  res.send(building);
});

module.exports = {
  // createUser,
  createBuilding,
  getBuildings,
  deleteBuilding,
  getBuildingByCode,
  updateBuilding
}

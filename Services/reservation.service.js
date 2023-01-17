const { parkingReservation } = require('../Models');
const { bUnits } = require('../Models');
const { building } = require('../Models');
const { UserService } = require('./index');
const { buildingService } = require('./index');
const moment = require('moment-timezone');

const startOfMonth = moment().startOf('month').format("YYYY-MM-DD");
const endOfMonth = moment().endOf('month').format("YYYY-MM-DD");

var ObjectID = require('mongodb').ObjectID;

const createReservation = async (userBody) => {
  const { buildingCode, buildingUnits ,licensedPlateNumber } = userBody;
  const buildingCodes = await building.findOne({ buildingCode });
  if (!buildingCodes) {
    return { status: 401, message: 'Invalid Building Code ' }
  }
  const buildingUnitsCheck = await bUnits.findOne({ buildingUnits });
  if (!buildingUnitsCheck) {
    return { status: 401, message: 'Invalid building Unit' }
  }
  const slots = await parkingReservation.find({ buildingUnits, createdAt: {$gte: new Date(startOfMonth), $lte: new Date(endOfMonth)} })
  if (slots.length >= buildingUnitsCheck.parkingSlots) {
    return { status: 401, message: 'Your parking Limit Exceeded!' }
  }
  const licensedPlateCheck = await parkingReservation.findOne({licensedPlateNumber , createdAt: {$gte: new Date(startOfMonth), $lte: new Date(endOfMonth)}});
  if(licensedPlateCheck){
    return { status: 400, message:`You are already registered in unit # ${licensedPlateCheck.buildingUnits} of Building ${licensedPlateCheck.buildingCode}! `}
  }
  const response = await parkingReservation.create(userBody);
  return { status: 200, message: response }
};

const getParkingReservation= async (id)=>{
  const usersData = await UserService.getUserById(id);
  const buildingCode = usersData.message.buildingCode;
  if(buildingCode){
    const response= await parkingReservation.find({buildingCode});
    return {status: 200, message: response}
  }
  const response= await parkingReservation.find().sort({createdAt : -1});
  if(response) {
    return {status: 200, message: response};
  }
  return {status: 401, message: 'Not found'}
};

const deleteParkingPermits= async (_id) => {
  const data= await parkingReservation.findOne(ObjectID(_id));  
  if (data) {
    await data.remove();
    return {status: 200, message: data};
  }
   return {status: 401, message: 'Building Not found'}
};

  module.exports={
    createReservation,
    getParkingReservation,
    deleteParkingPermits
  }
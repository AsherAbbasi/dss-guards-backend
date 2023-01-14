const { parkingReservation } = require('../Models');
const { bUnits } = require('../Models');
const { building } = require('../Models');
const moment = require('moment-timezone');

const startOfMonth = moment().startOf('month').format("YYYY-MM-DD");
const endOfMonth = moment().endOf('month').format("YYYY-MM-DD");

var ObjectID = require('mongodb').ObjectID;

const createReservation = async (userBody) => {
  const { buildingCode, buildingUnits } = userBody;
  const data = await building.findOne({ buildingCode });
  if (!data) {
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

  const response = await parkingReservation.create(userBody);
  return { status: 200, message: response }
};



      const getParkingReservation= async ()=>{
        const response=await parkingReservation.find().sort({createdAt : -1});
        if(response) {
          return {status: 200, message: response};
        }
        return {status: 401, message: 'Not found'}
        };

        const deleteParkingPermits= async (_id) => {
          const data=await parkingReservation.findOne(ObjectID(_id));  
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
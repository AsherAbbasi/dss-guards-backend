const { parkingReservation } = require('../Models');
const { building } = require('../Models');
var ObjectID = require('mongodb').ObjectID;

const createReservation= async (userBody)=>{
  const { buildingCode, licensedPlateNumber }=userBody;
  const plateNumberCheck =await parkingReservation.find({licensedPlateNumber});
  if(plateNumberCheck.length >= 3){
    return {status: 401, message: 'Your Parking Limit Exceeded! '}
  }
    const data=await building.findOne({buildingCode});
    if(!data){
      return {status: 401, message: 'Invalid Building Code '}
    }
    const response=await  parkingReservation.create(userBody);
      return {status: 200, message: response}
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
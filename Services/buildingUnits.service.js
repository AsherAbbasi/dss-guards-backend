const { buildingUnits } = require('../Models');
const httpStatus = require('http-status');
var ObjectID = require('mongodb').ObjectID;




const createUnits = async (userBody) => {
    const response = await buildingUnits.insertMany(userBody);
    if(!response){
        return { status:401, message: "something went wrong! plaese try later." };
    }
    return { status: 200, message: response };
  };

  const getBuildingUnits = async (buildingCode) => {
    const response = await buildingUnits.find({buildingCode});
    if (response) {
      return { status: 200, message: response };
    }
    return { status: 401, message: 'Building Units Not Found!' }
  };

  const updateBuildingUnits = async (_id,updateBody) => {
    const response = await buildingUnits.findOne(ObjectID(_id));
    if (!response) {
      return { status: 401, message: 'Something went wrong please try later!' }
    }
    Object.assign(response, updateBody);
    await response.save();
    return response;
  };

  module.exports = {
    createUnits, 
    getBuildingUnits,
    updateBuildingUnits
  }
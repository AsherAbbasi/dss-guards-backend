const { dailyReport } = require('../Models');
var ObjectID = require('mongodb').ObjectID;


const addDailyReport = async (userBody) => {
    const response = await dailyReport.create(userBody);
    return { status: 200, message: response };
  };

  const getDailyReports = async () => {
    const response = await dailyReport.find();
    return { status: 200, message: response };
  };
  
  const updateDailyReport = async (id,updateBody) => {
    const response = await dailyReport.findById(id);
    if (!response) {
      return { status: 401, message: 'Something went wrong please try later!' }
    }
    if (updateBody?.remarks) {
      updateBody.remarks = [...response?.remarks, updateBody.remarks];
    }
    if (updateBody?.time) {
      updateBody.time = [...response?.time, updateBody.time];
    }
    Object.assign(response, updateBody);
    await response.save();
    return { status: 200, message: response };

  };

  const deleteDailyReport= async (id) => {
    const response = await dailyReport.findById(id);
    if (response) {
      await response.remove();
      return {status: 200, message: response};
    }
     return {status: 401, message: 'Something went wrong! please try later'}
  };

  module.exports = {
    addDailyReport,
    getDailyReports,
    updateDailyReport,
    deleteDailyReport,
  };
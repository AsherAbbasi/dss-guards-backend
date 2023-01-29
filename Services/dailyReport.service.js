const { dailyReport } = require('../Models');


const addDailyReport = async (userBody) => {
    const response = await dailyReport.create(userBody);
    return { status: 200, message: response };
  };

  module.exports = {
    addDailyReport,
  };
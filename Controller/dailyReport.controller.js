const { dailyReport } = require('../Services');



const addDailyReport = async (req, res) => {
    const {status, message} = await dailyReport.addDailyReport(req.body);
    res.status(status).json(message);
   };

   module.exports = {
    addDailyReport,
  };
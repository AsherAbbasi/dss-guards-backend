const { dailyReport } = require('../Services');
const catchAsync = require('../utils/catchAsync');

const addDailyReport = catchAsync(async (req, res) => {
  const { status, message } = await dailyReport.addDailyReport(req.body);
  res.status(status).json(message);
});

const getDailyReports = catchAsync(async (req, res) => {
  const { status, message } = await dailyReport.getDailyReports(req.body);
  res.status(status).json(message);
});

const updateDailyReport = catchAsync(async (req, res) => {
  const { status, message } = await dailyReport.updateDailyReport(req.params.id, req.body);
  res.status(status).json(message);
});

const deleteDailyReport = catchAsync(async (req, res) => {
  const { status, message } = await dailyReport.deleteDailyReport(req.params.id);
  res.status(status).json(message);
});

module.exports = {
  addDailyReport,
  getDailyReports,
  updateDailyReport,
  deleteDailyReport
};
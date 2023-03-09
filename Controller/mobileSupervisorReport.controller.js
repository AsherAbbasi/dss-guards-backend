const { mobileSupervisorReport } = require('../Services');
const catchAsync = require('../utils/catchAsync');

const addMobileSupervisorReport = catchAsync(async (req, res) => {
  const { status, message } = await mobileSupervisorReport.addMobileSupervisorReport(req.body);
  res.status(status).json(message);
});

const getMobileSupervisorReport = catchAsync(async (req, res) => {
  const { status, message } = await mobileSupervisorReport.getMobileSupervisorReport(req.body);
  res.status(status).json(message);
});

const updateMobileSupervisorReport = catchAsync(async (req, res) => {
  const { status, message } = await mobileSupervisorReport.updateMobileSupervisorReport(req.params.id, req.body);
  res.status(status).json(message);
});

const deleteMobileSupervisorReport = catchAsync(async (req, res) => {
  const { status, message } = await mobileSupervisorReport.deleteMobileSupervisorReport(req.params.id);
  res.status(status).json(message);
});

module.exports = {
    addMobileSupervisorReport,
    getMobileSupervisorReport,
    updateMobileSupervisorReport,
    deleteMobileSupervisorReport
  };
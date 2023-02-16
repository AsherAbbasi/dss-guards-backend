const { incidentReport } = require('../Services');
const catchAsync = require('../utils/catchAsync');

const  addIncidentReport = catchAsync(async (req, res) => {
  const { status, message } = await incidentReport.addIncidentReport(req.body);
  res.status(status).json(message);
});

const getIncidentReport = catchAsync(async (req, res) => {
  const { status, message } = await incidentReport.getIncidentReport(req.body);
  res.status(status).json(message);
});

const updateIncidentReport = catchAsync(async (req, res) => {
  const { status, message } = await incidentReport.updateIncidentReport(req.params.id, req.body);
  res.status(status).json(message);
});

const deleteIncidentReport = catchAsync(async (req, res) => {
  const { status, message } = await incidentReport.deleteIncidentReport(req.params.id);
  res.status(status).json(message);
});

module.exports = {
    addIncidentReport,
    getIncidentReport,
    updateIncidentReport,
    deleteIncidentReport
  };
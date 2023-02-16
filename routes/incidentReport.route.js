var express = require('express');
const incidentReportController = require('../Controller/incidentReport.controller');
const router = express.Router();

router
.route('/')
.post(incidentReportController.addIncidentReport)
.get(incidentReportController.getIncidentReport)

router
.route('/:id')
.put(incidentReportController.updateIncidentReport)
.delete(incidentReportController.deleteIncidentReport)




module.exports = router;
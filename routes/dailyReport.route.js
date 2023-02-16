var express = require('express');
const dailyReportController = require('../Controller/dailyReport.controller');
const router = express.Router();

router
.route('/')
.post(dailyReportController.addDailyReport)
.get(dailyReportController.getDailyReports)

router
.route('/:id')
.put(dailyReportController.updateDailyReport)
.delete(dailyReportController.deleteDailyReport)


module.exports = router;

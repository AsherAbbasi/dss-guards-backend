var express = require('express');
const dailyReportController = require('../Controller/dailyReport.controller');
const router = express.Router();

router
.route('/')
.post(dailyReportController.addDailyReport)

module.exports = router;

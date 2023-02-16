var express = require('express');
const mobileSupervisorReport = require('../Controller/mobileSupervisorReport.controller');
const router = express.Router();

router
.route('/')
.post(mobileSupervisorReport.addMobileSupervisorReport)
.get(mobileSupervisorReport.getMobileSupervisorReport)

router
.route('/:id')
.put(mobileSupervisorReport.updateMobileSupervisorReport)
.delete(mobileSupervisorReport.deleteMobileSupervisorReport)




module.exports = router;
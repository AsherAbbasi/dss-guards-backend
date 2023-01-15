var express = require('express');
const buildingUnitscontroller = require('../Controller/buildngUnits.Controller');

const ApiError = require('../utils/ApiErrors');
const router = express.Router();



router
.route('/')
.post(buildingUnitscontroller.createBuildingUnits)


router
.route('/:buildingCode')
.get(buildingUnitscontroller.getBuildingUnits)

router
.route('/:id')
.put(buildingUnitscontroller.updateBuildingUnits)


module.exports = router;
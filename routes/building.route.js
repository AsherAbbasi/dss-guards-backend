var express = require('express');
const buildingController = require('../Controller/building.controller');

const ApiError = require('../utils/ApiErrors');
const router = express.Router();



router
.route('/:buildingCode')
.delete(buildingController.deleteBuilding)
.get(buildingController.getBuildingByCode)
.put(buildingController.updateBuilding)
router
.route('/')
// .post(UserController.createUser)
.post(buildingController.createBuilding)
.get(buildingController.getBuildings)



module.exports = router;

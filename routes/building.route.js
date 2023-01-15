var express = require('express');
const buildingController = require('../Controller/building.controller');

const auth = require('../middlewares/auth');

const router = express.Router();



router
.route('/:buildingCode')
.delete(buildingController.deleteBuilding)
.get(buildingController.getBuildingByCode)
.put(buildingController.updateBuilding)
router
.route('/')
// .post(UserController.createUser)
.post(auth('AdminView'),buildingController.createBuilding)
.get(auth('AdminView'),buildingController.getBuildings)


module.exports = router;

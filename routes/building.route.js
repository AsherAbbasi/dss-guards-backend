var express = require('express');
const buildingController = require('../Controller/building.controller');

const auth = require('../middlewares/auth');

const router = express.Router();



router
.route('/:buildingCode')
.delete(buildingController.deleteBuilding)
.get(auth('AdminView'),buildingController.getBuildingByCode)
.put(buildingController.updateBuilding)
router
.route('/')
// .post(UserController.createUser)
.post(buildingController.createBuilding)
.get(buildingController.getBuildings)



module.exports = router;

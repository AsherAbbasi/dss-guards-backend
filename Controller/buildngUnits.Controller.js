 
 const httpStatus = require('http-status');
 const { buildingUnitsService } = require('../Services');
 

 
 const createBuildingUnits = async (req, res) => {
    const {status, message} = await buildingUnitsService.createUnits(req.body);
    res.status(status).json(message);
   };

   const getBuildingUnits = (async (req, res) => {
    const {status, message} = await buildingUnitsService.getBuildingUnits(req.params.buildingCode);
    res.status(status).json(message);
   });

   const updateBuildingUnits = async (req, res) => {
    const building = await buildingUnitsService.updateBuildingUnits(req.params.id, req.body);
    res.send(building);
  };

   module.exports = {
    createBuildingUnits, 
    getBuildingUnits,
    updateBuildingUnits
  }
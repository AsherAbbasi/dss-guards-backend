   
 const httpStatus = require('http-status');
 const { buildingService } = require('../Services');
 const ApiError = require('../utils/ApiErrors');
 

 
 const createBuilding = (async (req, res) => {
    const {status, message} = await buildingService.createBuilding(req.body);
    res.status(status).json(message);
   });


   const getBuildings = (async (req, res) => {
      const {status, message} = await buildingService.getBuildings();
      res.status(status).json(message);
     });

     const getBuildingByCode = (async (req, res) => {
      const {status, message} = await buildingService.getBuildingByCode(req.params);
      res.status(status).json(message);
     });


     const deleteBuilding =(async (req, res) => {
      const {buildingCode}=req.params
      const {status, message}= await buildingService.deleteBuildingByCode(buildingCode);
      res.status(status).json(message);
    });

    const updateBuilding = async (req, res) => {
      const building = await buildingService.updateBuilding(req.params.id, req.body);
      res.send(building);
    };
 
   module.exports={
    // createUser,
    createBuilding,
    getBuildings,
    deleteBuilding,
    getBuildingByCode,
    updateBuilding
   }
  
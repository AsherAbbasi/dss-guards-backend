   
 const httpStatus = require('http-status');
 const { buildingService } = require('../Services');
 const ApiError = require('../utils/ApiErrors');
 

 
 const createBuilding = (async (req, res) => {
    const {status, message} = await buildingService.createBuilding(req.body);
    res.status(status).json(message);
   });


   const getBuildings = (async (req, res) => {
      console.log(req.user._id)
      const id = req.user._id;
      const role = req.user.role;
      const {status, message} = await buildingService.getBuildings(role , id);
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
      const {buildingCode}=req.params
      const building = await buildingService.updateBuilding(buildingCode, req.body);
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
  
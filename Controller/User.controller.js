   
 const httpStatus = require('http-status');
 const { UserService } = require('../Services');
 const ApiError = require('../utils/ApiErrors');
 
 
 const AddUser = (async (req, res) => {
  const {status, message} = await UserService.AddUser(req.body);
  res.status(status).json(message);
 });
 
   const getUserByEmailPassword = (async (req, res) => {
    const {email, password} = req.body;
    const {status, message} = await UserService.getUserByEmailPassword(email, password);
    res.status(status).json(message);
   });

   const getAllUser = (async (req, res) => {
      const {status, message} = await UserService.getAllUser();
      res.status(status).json(message);
     });


   const getUser = (async (req, res) => {
      const user = await UserService.getUserById(req.params.userId);
      if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
      }
      res.send(user);
    });
    const updateUser = async (req, res) => {
      const building = await UserService.updateUser(req.params.id, req.body);
      res.send(building);
    };

    const deleteUser =(async (req, res) => {
      const {status, message}= await UserService.deleteUserById(req.params.id);
      res.status(status).json(message);
    });

   module.exports={
    AddUser,
    getUser,
    getAllUser,
    getUserByEmailPassword,
    updateUser,
    deleteUser
    
   }
  
   
 const httpStatus = require('http-status');
 const { UserService } = require('../Services');
 const ApiError = require('../utils/ApiErrors');
 
 
   // const createUser =async (req, res) => {
   // const user = await UserService.createUser(req.body);
   // res.status(httpStatus.CREATED).send(user);
   // };
 
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
 
   module.exports={
   //  createUser,
    getUser,
    getAllUser,
    getUserByEmailPassword,
   }
  
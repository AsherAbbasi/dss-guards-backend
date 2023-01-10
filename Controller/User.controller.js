   
 const httpStatus = require('http-status');
 const { UserService } = require('../Services');
 const ApiError = require('../utils/ApiErrors');
 
 
//  const createUser =async (req, res) => {
//   const user = await UserService.createUser(req.body);
//   res.status(httpStatus.CREATED).send(user);
// };
 
 const getUserByEmailPassword = (async (req, res) => {
    const {email, password} = req.body;
    const {status, message} = await UserService.getUserByEmailPassword(email, password);
    res.status(status).json(message);
   });
 
   module.exports={
    // createUser,
    getUserByEmailPassword,
   }
  
   
 const httpStatus = require('http-status');
 const { employeeService } = require('../Services');
 const ApiError = require('../utils/ApiErrors');
 

 
 const AddEmployee = (async (req, res) => {
    const {status, message} = await employeeService.AddEmployee(req.body);
    res.status(status).json(message);
   });

   const getEmployee = (async (req, res) => {
      const {status, message} = await employeeService.getEmployee();
      res.status(status).json(message);
     });

     const deleteEmployee =(async (req, res) => {
      const {status, message}= await employeeService.deleteEmployeeById(req.params.id);
      res.status(status).json(message);
    });
 
   module.exports={
    AddEmployee,
    getEmployee,
    deleteEmployee
   }
  
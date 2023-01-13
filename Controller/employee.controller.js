   
 const httpStatus = require('http-status');
 const { employeeService } = require('../Services');
 const ApiError = require('../utils/ApiErrors');
 

 
 const AddEmployee = (async (req, res) => {
    const {status, message} = await employeeService.AddEmployee(req.body);
    res.status(status).json(message);
   });

   const getAllEmployee = (async (req, res) => {
      const {status, message} = await employeeService.getAllEmployee();
      res.status(status).json(message);
     });
   
   //   const getEmployee = (async (req, res) => {
   //    const id = req.params.id
   //    const {status, message} = await employeeService.getEmployee(id);
   //    res.status(status).json(message);
   //   });

     const deleteEmployee =(async (req, res) => {
      const {status, message}= await employeeService.deleteEmployeeById(req.params.id);
      res.status(status).json(message);
    });
 
   module.exports={
    AddEmployee,
    getAllEmployee,
   //  getEmployee,
    deleteEmployee
   }
  
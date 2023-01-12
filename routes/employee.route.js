var express = require('express');
const employeeController = require('../Controller/employee.controller');


const ApiError = require('../utils/ApiErrors');
const router = express.Router();



router
.route('/')
.post(employeeController.AddEmployee)
.get(employeeController.getEmployee)

router
.route('/:id')
.delete(employeeController.deleteEmployee)



module.exports = router;

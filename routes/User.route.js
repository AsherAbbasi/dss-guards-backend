var express = require('express');
const UserController = require('../Controller/User.controller');
const ApiError = require('../utils/ApiErrors');
const router = express.Router();


router
.route('/login')
// .post(UserController.createUser)
.post(UserController.getUserByEmailPassword)

module.exports = router;

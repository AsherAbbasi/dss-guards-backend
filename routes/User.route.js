var express = require('express');
const UserController = require('../Controller/User.controller');
const ApiError = require('../utils/ApiErrors');
const router = express.Router();


router
.route('/login')
// .post(UserController.createUser)
.post(UserController.getUserByEmailPassword)

router
.route('/AllUsers')
.get(UserController.getAllUser)

router
.route('/:userId')
.get(UserController.getUser)

router
.route('/user')
.post(UserController.AddUser)

router
.route('/:id')
.delete(UserController.deleteUser)
.put(UserController.updateUser)

module.exports = router;

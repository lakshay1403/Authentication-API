const express = require("express");
const userController = require("../controller/userController");
const isAuthenticated = require("../middleware/isAuthenticated");
const userRoute = express.Router();

//!Register
userRoute.post('/api/users/register', userController.Registration);
userRoute.post('/api/users/login', userController.login);
userRoute.get('/api/users/profile', isAuthenticated, userController.profile);

module.exports = userRoute;
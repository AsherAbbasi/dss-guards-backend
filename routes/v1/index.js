const express = require('express');
const UserRoute = require('../User.route');
const buildingRoute = require('../building.route');
const reservationRoute = require('../reservation.route');
const buildingUnitsRoutes = require('../buildingUnits.route');
// const employeeRoutes = require('../employee.route');


const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: UserRoute,
      },
      {
        path:'/building',
        route:buildingRoute
      }
      ,
      {
        path:'/reservation',
        route:reservationRoute
      },
      {
        path:'/units',
        route:buildingUnitsRoutes
      },
      // {
      //   path:'/employee',
      //   route:employeeRoutes
      // }

]
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
 

module.exports = router;
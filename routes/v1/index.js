const express = require('express');
const UserRoute = require('../User.route');
const buildingRoute = require('../building.route');
const reservationRoute = require('../reservation.route');


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
      }

]
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
 

module.exports = router;
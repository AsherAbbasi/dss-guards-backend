const express = require('express');
const UserRoute = require('../User.route');
const buildingRoute = require('../building.route');
const reservationRoute = require('../reservation.route');
const buildingUnitsRoutes = require('../buildingUnits.route');
// const employeeRoutes = require('../employee.route');
const ticketRoute = require('../ticket.route');
const generatePDF = require('../generatepdf.route');
const dailyReport = require('../dailyReport.route');
const mobileSupervisorReport = require('../mobileSupervisorReport.route');
const incidentReport = require('../incidentReport.route');




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
      ,
      {
        path:'/ticket',
        route:ticketRoute
      },
      {
        path:'/getPDF',
        route:generatePDF
      },
      {
        path:'/dailyReport',
        route:dailyReport
      },
      {
        path:'/supervisorReport',
        route:mobileSupervisorReport
      },
      {
        path:'/incidentReport',
        route:incidentReport
      }

]
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
 

module.exports = router;
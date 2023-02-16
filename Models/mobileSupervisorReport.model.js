const mongoose = require('mongoose');

const mobileSupervisorReportScheme = mongoose.Schema(
    {
        guardOnDuty: {
            type: String,
            required: true,
        },
        licenseNumber: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            // required: true,
        },
        clientAddress: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        procityvince: {
            type: String,
            // required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        supervisorName: {
            type: String,
            required: true,
        },
        arrivalTime: {
            type: String,
            required: true,
        },
        departureTime: {
            type: String,
            required: true,
        },
        criteriaComments: {
            type: JSON,
        },
        criteriaRating: {
            type: JSON,
        },
        systemInspection:{
            type:String,
        },
        TrainingRequired:{
            type:String,
        },
        followUpDate:{
            type:String,
        },
        otherComments:{
            type:String,
        },
        concerns:{
            type:String,
        }
    },
    {
        timestamps: true,
    }

);



const mobileSupervisorReport = mongoose.model('mobileSupervisorReport', mobileSupervisorReportScheme);

module.exports = mobileSupervisorReport;

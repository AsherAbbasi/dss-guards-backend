const mongoose = require('mongoose');

const incidentReportScheme = mongoose.Schema(
    {
        guardName: {
            type: String,
            required: true,
        },
        guardLicenseNumber: {
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
        province: {
            type: String,
            // required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        incidentType: {
            type: String,
            // required: true,
        },
        supervisorName: {
            type: String,
            required: true,
        },
        supervisorLicenseNumber: {
            type: String,
            required: true,
        },
        officerName: {
            type: String,
            required: true,
        },
        officerId: {
            type: String,
            required: true,
        },
        division: {
            type: String,
            required: true,
        },
        officerArrivalTime: {
            type: String,
            required: true,
        },
        officerDepartureTime: {
            type: String,
            required: true,
        },
        peramedicsOfficerName: {
            type: String,
            required: true,
        },
        peramedicsOfficerId: {
            type: String,
            required: true,
        },
        embulanceNumber: {
            type: String,
            required: true,
        },
        embulanceArrivalTime: {
            type: String,
            required: true,
        },
        embulanceDepartureTime: {
            type: String,
            required: true,
        },
        time: {
            type: Array,
            default: []
        },
        remarks: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true,
    }

);



const incidentReport = mongoose.model('incidentReport', incidentReportScheme);

module.exports = incidentReport;

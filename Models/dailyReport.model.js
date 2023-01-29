const mongoose = require('mongoose');

const dailyReportSchema = mongoose.Schema(
    {
        guardName: {
            type: String,
            required: true,
        },
        licensedPlateNumber: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            // required: true,
        },
        clientName: {
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
        weatherCondition: {
            type: String,
            required: true,
        },
        equipment: {
            type: String,
            required: true,
        },
        relievedTo: {
            type: String,
            required: true,
        },
        relievedBy: {
            type: String,
            required: true,
        },
        shiftStartTime: {
            type: String,
            // required: true,
        },
        shiftEndTime: {
            type: String,
            required: true,
        },
        hoursOfShift: {
            type: String,
            required: true,
        },
        time: {
            type: Array,
            required: true,
        },
        remarks: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }

);



const dailyReport = mongoose.model('dailyReport', dailyReportSchema);

module.exports = dailyReport;

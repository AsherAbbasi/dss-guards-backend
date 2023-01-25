const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        timeFrom: {
            type: String,
            default: 3,
            // required: true,
        },
        timeTo: {
            type: String,
            default: 3,
            // required: true,
        },
        licensedPlateNumber: {
            type: String,
            required: true,
        },
        expDate: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            default: 3,
            // required: true,
        },
        make: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            default: 3,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        voilation: {
            type: String,
            default: 3,
            required: true,
        },
        law: {
            type: String,
            required: true,
        },
        comments: {
            type: String,
            // required: true,
        },
        penaltyAmount: {
            type: String,
            default: 3,
            required: true,
        },
        officerNo: {
            type: String,
            required: true,
        },
        unit: {
            type: String,
            default: 3,
            required: true,
        },
    },
    {
        timestamps: true,
    }

);



const ticket = mongoose.model('ticket', ticketSchema);

module.exports = ticket;

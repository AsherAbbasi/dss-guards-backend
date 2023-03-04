const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
    {
        officerName: {
            type: String,
        },
        date: {
            type: String,
            // required: true,
        },
        voilationTime: {
            type: String,
            // required: true,
        },
        licensedPlateNumber: {
            type: String,
            // required: true,
        },
        expDate: {
            type: String,
            // required: true,
        },
        province: {
            type: String,
            // required: true,
        },
        make: {
            type: String,
            // required: true,
        },
        city: {
            type: String,
            // required: true,
        },
        location: {
            type: String,
            // required: true,
        },
        voilation: {
            type: String,
            // required: true,
        },
        law: {
            type: String,
            // required: true,
        },
        comments: {
            type: String,
            // required: true,
        },
        penaltyAmount: {
            type: String,
            // required: true,
        },
        officerId: {
            type: String,
            // required: true,
        }
        ,
        // unit: {
        //     type: String,
        //     // required: true,
        // },
    },
    {
        timestamps: true,
    }

);



const ticket = mongoose.model('ticket', ticketSchema);

module.exports = ticket;

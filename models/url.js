const mongoose = require("mongoose");

//define schema
const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            unique: true,
        },

        redirectURL: {
            type: String,
            required: true,
        },

        visitHistory: [{ timestamp: { type: Number } }]
    }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
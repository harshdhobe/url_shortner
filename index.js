const express = require("express");
//const { handleGenerateNewShortURL } = require("./controllers/url.js")
const app = express();
const PORT = 8005;
const shortid = require('shortid');
const router = express.Router();
const { connectToMongoDB } = require("./connect.js")


//connect to mongoDB
connectToMongoDB("mongodb://localhost:27017").then(() => console.log("MongoDB connected"));

const urlRouter = require("./routes/url.js");


app.use("/url", urlRouter);


app.listen(PORT, () => (console.log(`Server started on PORT ${PORT}`)));

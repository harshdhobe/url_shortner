const express = require("express");
const { handleGenerateNewShortURL, } = require("../controllers/url");
const router = express.Router();

//add routes
router.post("/", handleGenerateNewShortURL);

module.exports = router;
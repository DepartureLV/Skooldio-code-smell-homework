const express = require("express");

const totalRoute = require("./routes/total");

const appTotal = express();

appTotal.use(express.urlencoded({ extended: false }));

appTotal.use(express.json());

appTotal.use("/", totalRoute);
module.exports = appTotal;
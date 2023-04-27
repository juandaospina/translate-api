const express = require("express");
require("dotenv").config();

const { translateRoute } = require("./routes/translate.route");
const { errorHandler } = require("./middlewares/error.handler");

// Server
const app = express();
// Route
app.use(translateRoute);
// Middlewares
app.use(errorHandler);

module.exports = app;


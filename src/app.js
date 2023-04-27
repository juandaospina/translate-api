const express = require("express");

const cors = require('cors');
require("dotenv").config();

const { translateRoute } = require("./routes/translate.route");
const { errorHandler } = require("./middlewares/error.handler");

const enableDomains = ['https://translation-web.vercel.app']

// Server
const app = express();
app.use(cors());
// Route
app.use(translateRoute);
// Middlewares
app.use(errorHandler);

module.exports = app;


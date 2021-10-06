"use strict";

// Basic express setup:

const express       = require("express");
const morgan        = require("morgan");
const db            = require("./lib/in-memory-db");
const DataHelpers = require("./lib/data-helpers.js")(db);
const app           = express();

const indexRouter = require("./routes/index");
const tweetsRouter = require("./routes/tweets")(DataHelpers);

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static("public"));


// Update the dates for the initial tweets (data-files/initial-tweets.json).
require("./lib/date-adjust")();

app.use("/", indexRouter);
app.use("/tweets", tweetsRouter);

module.exports = app;

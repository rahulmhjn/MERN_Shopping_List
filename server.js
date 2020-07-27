const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const mongoDb = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Body Parser
app.use(express.json());

//Connect to mongodb
mongoDb();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const mongoDb = require("./config/db");

const items = require("./routes/api/items");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Body Parser
app.use(express.json());

//Connect to mongodb
mongoDb();

// Use Routes
app.use("/api/items", items);
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve Static Folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

const express = require("express");
const router = require("./routes/todoRoute");
const app = express();

//import routes

//middleware

app.use(express.json());
app.use("/api/v1", router);

module.exports = app;

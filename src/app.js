const express = require('express');
const app = express();
const dummyRoute = require('./routes/dummy_route');

app.use("/dummy", dummyRoute);

module.exports = app;
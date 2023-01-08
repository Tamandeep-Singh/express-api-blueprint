const express = require('express');
const app = express();
const userRoute = require('./routes/user_route');

app.use("/api/users", userRoute);

module.exports = app;
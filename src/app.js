const express = require('express');
const app = express();
const userRoute = require('./routes/user_route');

app.use(express.json());
app.use("/api/users", userRoute);

module.exports = app;
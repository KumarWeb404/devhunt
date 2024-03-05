const userRouter = require('./routes/userRoutes');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

module.exports = app;

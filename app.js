const employerRouter = require('./routes/employerRoutes');
const devRouter = require('./routes/devRoutes');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/employer', employerRouter);
app.use('/dev', devRouter);

module.exports = app;

const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');
const express = require('express');
const db = require('./config/db');
const seed = require('./config/seed');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRouter);
app.use('/user', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}....`);
});

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
const DB = process.env.DATABASE_CONNECT;

mongoose
  .connect(DB)
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}....`);
});

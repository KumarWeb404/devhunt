const mongoose = require('mongoose');

const app = require('./app');
const DB = 'mongodb://127.0.0.1:27017/devhunt';

mongoose
  .connect(DB)
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}....`);
});

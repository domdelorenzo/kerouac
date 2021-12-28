const mongoose = require('mongoose');
require('dotenv').config(); // Add this line

require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });
mongoose.set('debug', true);
const db = mongoose.connection;

module.exports = db;

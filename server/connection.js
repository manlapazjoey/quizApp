const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const dbString = process.env.MONGO_DB_CONNECTION;
mongoose.set('strictQuery', false);
mongoose
  .connect(`${dbString}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(error => {
    // console.log(error);
    console.log(dbString);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
module.exports = db;

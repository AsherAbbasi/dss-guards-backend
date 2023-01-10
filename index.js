require('dotenv').config()
const mongoose  = require('mongoose');
const app = require('./app')

mongoose.set('strictQuery', false);
let server;

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,autoIndex: false}).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
  });
});





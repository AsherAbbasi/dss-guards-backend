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

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
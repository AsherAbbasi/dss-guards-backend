const express = require('express');
const helmet = require('helmet');
const httpStatus = require('http-status');
const cors = require('cors');
const routes = require('./routes/v1')
const ApiError = require('./utils/ApiErrors');
const {jwtStrategy} = require('./config/passport');
const passport = require('passport');
const bodyParser=require('body-parser');

const app = express();



// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// v1 api routes
app.get('/', (req, res)=> res.send('Server is healthy!'));

app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});


module.exports = app;

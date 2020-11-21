var cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const router = require("./routes/createRouter.js")();

const app = express();

dotenv.config();

// Connect to DB

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
mongoose.connect(process.env.DB_URL, options);

mongoose.connection.on('connected', function () {
  console.log('Database connection established!');
}); 

mongoose.connection.on('error',function (err) { 
  console.log('Database connection connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () { 
  console.log('Database disconnected'); 
});


// Safe exit on Node process crash
process.on('SIGINT', function() {   
  mongoose.connection.close(function () { 
    console.log('App terminated... Database connection closed.'); 
    process.exit(0); 
  }); 
}); 

//Configure Res headers
app.use((req,res, next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*"); 

  if(req.method === 'OPTIONS'){
      res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,GET,DELETE");
      return res.status(200).json({});
  }
next();
})


// Fills DB
require("./models/populate");

//Middleware

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

//Route Middlewares
app.use("/api/user", router);
const courseRoute = require('./routes/api/course');
const studentRoute = require('./routes/api/student');
const professorRoute = require('./routes/api/professor');
const chatRoute = require('./routes/api/chat');
app.use('/course',courseRoute);
app.use('/student',studentRoute);
app.use('/professor',professorRoute);
app.use('/chat',chatRoute);


// Temporary error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send({ error: err.message });
});

module.exports = app;

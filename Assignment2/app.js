// Load installed third-party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Import route modules
let indexRouter = require('./routes/index.js');
let usersRouter = require('./routes/users.js');

let app = express();

// Set up the view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use middleware for logging, parsing, and serving static files
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Define route handlers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Handle 404 errors by forwarding to the error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler middleware
app.use(function(err, req, res, next) {
  // Set local variables, providing error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

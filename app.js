var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


//Khai bao cac ROUTES
var index = require('./routes/index');
var login = require('./routes/login');
var users = require('./routes/users');
var admin = require('./routes/admin-page');

//END Khai bao cac ROUTES

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: "GHJGJG5GJGJ"
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', login);
app.use(function(req, res, next) {
	console.log('start check!!!!!'+req.session.userId);
	console.log('start check!!!!!'+req.originalUrl);
	next();
})

//SAU KHI LOGIN
app.use('/users', users);
app.use('/admin-page', admin); // SU DUNG ROTUES: ADMIN_PAGE.JS

//


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//hacemos la primera ruta
var empleadosRouter = require("./routes/empleados.router");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//MongoConnection- aqui se hace uso de la función conexion
database.mongoConnect();

//Router
app.use('/', indexRouter);
app.use('/users', usersRouter);
//despues de hacer la primera ruta hacemos esto
app.use("/empleados", empleadosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

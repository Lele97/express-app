const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require("./routes/api")
const contactsRouter = require("./routes/contacts")
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use("/image", express.static(path.join(__dirname, 'public', 'images')));
app.use("/css", express.static(path.join(__dirname, 'public', 'stylesheets')));
app.use("/js", express.static(path.join(__dirname, 'public', 'javascripts')));
app.use("/bootstrap", express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api", apiRouter)
app.use("/contacts", contactsRouter)

const errorHandling = (err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
}
// catch 404 and forward to error handler
app.use(function (next) {
    next(createError(404));
});

// error handler
app.use(errorHandling)

module.exports = app;

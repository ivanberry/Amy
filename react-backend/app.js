var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

let secret = {
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 6000
	}
};

// var cors = require('cors');

var index = require('./controllers/index');
var users = require('./controllers/users');
const mongoose = require('mongoose');
const config = require('./config/_config');
const basic_auth = require('./lib/basic-auth');
const login = require('./controllers/login');

var app = express();

app.set('env', 'test');

if(app.get('env') === 'production') {
  app.set('trust proxy', 1);
  secret.cookie.secure = true;
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(cors);
app.use(session(secret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/login', login.login);

app.use('/', index);
app.get('/api/users', users.get);
app.post('/api/users', users.post);
app.post('/api/users/:name', users.post);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});


//create mongdb connection
mongoose.set('debug', true);
mongoose.connect(config.mongoURI[app.settings.env], function(err) {
	if (err) {
		console.log('Error connecting to the database' + err);
	} else {
		console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
	}
});

//create connection db instance
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connectin Error!'));

// error handler
app.use(function(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

let secret = {
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 600000
	}
};

const mongoose = require('mongoose');

const config = require('./config/_config');
const basic_auth = require('./lib/basic-auth');

const login = require('./controllers/login');
const logout = require('./controllers/logout');
const index = require('./controllers/index');
const users = require('./controllers/users');
const article = require('./controllers/article');
const tag = require('./controllers/tag');

var app = express();

app.set('env', process.env.NODE_ENV || 'test');

if(app.get('env') === 'production') {
  app.set('trust proxy', 1);
  secret.cookie.secure = true;
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(session(secret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/login', login.login);
app.get('/api/logout', logout.logout);

app.use('/', index);
app.get('/api/users', basic_auth, users.get);
app.post('/api/users', users.post);
app.post('/api/users/:name', users.post);

app.get('/api/articles', article.getArticles);
app.post('/api/articles', article.getArticleWithTag);
app.get('/api/article/:id', article.getArticleDetailById);
app.put('/api/articles', article.postNewArticle);
app.post('/api/articles/:id', article.updateArticle);
app.delete('/api/articles/:id', article.deleteArticle);

app.post('/api/addTag', tag.addNewTag);
app.post('/api/deleteTag', tag.deleteTag);
app.get('/api/getTags', tag.getTags);

app.post('/api/image', image.postImage);

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

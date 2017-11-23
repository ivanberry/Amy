module.exports = {
  db: {
    production: '',
    development: 'mongodb://localhost/blog_app',
    test: 'mongodb://localhost/app'
  },
  salt: {
    test: 2,
    development: 10
  }
};
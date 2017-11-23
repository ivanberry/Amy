const config = {};
config.mongoURI = {
  development: 'mongodb://localhost/dev-app',
  test: 'mongodb://localhost/test-app',
};
config.saltLevel = {
  development: 12,
  test: 2
};
module.exports = config;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  tags: {
    type: Array,
    default: []
  }
});

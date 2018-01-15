const TagModel = require('../model/Tag');
const config = require('../config/_config');

class Tag {
  constructor(opt) {
    Object.assign(this, opt);
    console.log(this);
  }

  createNewTag(name) {
    let newTag = new TagModel(this);
    return newTag.save();
  }
}

module.exports = Tag;
const URL = require('../ultis/request');

const Tag = require('../ultis/tag');
const TagModel = require('../model/Tag');

const { notFoundError, serverError, succeeExpect } = require('../ultis/test-helper');

require('../ultis/test-ultis');

const chai = require('chai');
const expect = chai.expect;

const rp = require('request-promise');

describe('Tag api test collection', () => {
  /*
  0. Seperately add tag
  1. delete tag
  2. query articles with particular tag
  */
  it.only('Add custom tag', done => {
    rp({
      uri: `${URL}/addTag`,
      method: 'POST',
      body: {
        name: 'custom'
      }
    })
    .then(res => {
      succeeExpect(res, expect);
      done();
    })
    .catch(err => {
      notFoundError(err, expect);
      done(err);
    })
  });
});

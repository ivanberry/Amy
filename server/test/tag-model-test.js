const chai = require('chai');
const expect = chai.expect;

require('../ultis/test-ultis');

const TagModel = require('../model/Tag');
const Tag = require('../ultis/tag');

/*
Tag: 模型的建立，查询，删除等等
*/
let o = {
	tag: 'React'
};

describe('Tag Model test collection', () => {
	beforeEach(done => {
		TagModel.remove({}, err => {
			done();
		});
  });

	it('Create new tag', done => {
		let newTag = new Tag(o);
		newTag
			.createNewTag()
			.then(doc => {
				expect(doc.tag).to.be.exist;
				expect(doc.tag).to.be.a('string');
				expect(doc.tag).to.be.equal('React');
				done();
			})
			.catch(err => {
				done(err);
			});
  });

  it('Create tag with default value', done => {
    let newTag = new Tag();
    newTag.createNewTag()
    .then(doc => {
      expect(doc.tag).to.be.equal('Default');
      done();
    }).catch(err => {
      done(err);
    });
  })
});

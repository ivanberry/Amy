exports.unAuthorized = (res, expect) => {
	res = res.response;
	expect(res.body.statusCode).to.be.equal(401);
	expect(res.body.message).to.be.equal('User Unauthorized!');
};

exports.notFoundError = (err, expect) => {
	expect(err).to.exist;
	expect(err.statusCode)
		.to.be.a('number')
		.to.be.equal(404);
};

exports.serverError = (err, expect) => {
	expect(err).to.be.exist;
	expect(err.statusCode)
		.to.be.a('number')
		.to.be.equal(500);
};

exports.succeeExpect = (res, expect) => {
	expect(res).to.exist;
	expect(res.statusCode).to.be.equal(200);
	expect(res.message)
		.to.be.a('string')
		.to.be.equal('Success!');
};

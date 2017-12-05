
exports.unAuthorized = (res, expect) => {
  res = res.response;
  expect(res.body.statusCode).to.be.equal(401);
  expect(res.body.message).to.be.equal('User Unauthorized!');
}

exports.notFoundError = (err, expect) => {
  expect(err.name).to.be.equal('StatusCodeError');
  expect(err.statusCode).to.be.a('number').to.be.equal(404);
}
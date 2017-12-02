
exports.unAuthorized = (res, except) => {
  res = res.response;
  except(res.body.statusCode).to.be.equal(401);
  except(res.body.message).to.be.equal('User Unauthorized!');
}
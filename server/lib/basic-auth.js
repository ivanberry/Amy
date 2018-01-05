/**
 * Authorization only
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = function auth(req, res, next) {
	let _s_name = req.session.user;
	if (!_s_name) {
		res.status(401);
		res.set('WWW-Authenticate', 'Basic realm="Resource Protected"');
		res.json({
			statusCode: 401,
			message: 'User Unauthorized!'
		});
	} else {
		next();
	} 

	//just apis, so REDIRECT should be handled by Front.
};

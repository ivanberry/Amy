exports.logout = (req, res, next) => {
	req.session.destroy(err => {
		let response = {
			status: '200',
			message: 'Success!'
		};
		if (err) next(err);
		res.json(response);
		next();
	});
};

const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const UPLOADS = path.join(__dirname, '..', `uploads`);

function postImage(req, res, next) {
	let form = new formidable.IncomingForm();
	form.uploadDir = UPLOADS;
	form.keepExtensions = true;
	let response = {
		statusCode: 500,
		message: 'Server error'
	};

	form.on('file', (name, file) => {
		fs.rename(file.path, form.uploadDir + '/' + file.name);
	});

	form.on('error', err => {
		res.json(response);
	});

	form.parse(req, function(err, fields, files) {
		if (err) {
			res.status(500);
			res.end('Server error');
		} else {
			let image = files['image'],
				md_path = `![${image.name}](/api/image/${image.name})`;
			res.end(md_path);
		}
	});

	return;
}

function getImage(req, res, next) {
	let { image } = req.params;
	let response = {
		statusCode: 404,
		message: 'Param error'
	};
	if (!image) {
		res.json(response);
	}

	let _readStream = fs.createReadStream(path.join(UPLOADS, `${image}`));
	_readStream.pipe(res);
	_readStream.on('error', err => {
		response.message = 'Image not Found!';
		res.json(response);
		next(err);
	});
}

exports.postImage = postImage;
exports.getImage = getImage;

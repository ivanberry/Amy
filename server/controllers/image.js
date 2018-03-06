const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const UPLOADS = path.join(__dirname, '..', `uploads`);

function postImage(req, res, next) {
    let form = new formidable.IncomingForm();
    form.uploadDir = UPLOADS;
    form.keepExtensions = true;

    form.parse(req, function (err, fields, files) {
        if (err) {
            res.status(500);
            res.end('Suck my dick');
        } else {
            res.end('Good');
        }
    });

	return;
}

function getImage(req, res, next) {
	let { name } = req.params;
	if (!name) {
		res.send('Suck my dick');
	}
	let _readStream = fs.createReadStream(path.join(UPLOADS, `${name}.jpeg`));
	_readStream.pipe(res);
}

exports.postImage = postImage;
exports.getImage = getImage;

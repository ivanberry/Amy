const fs = require('fs');
const path = require('path');

const UPLOADS = path.join(__dirname, '..');

function postImage(req, res, next) {
	let { file, type, name } = req.body;
	let sufix = new Date().getTime();
    let _name = `name_${sufix}`;
    let data = '';

	let _readStream = fs.createReadStream(file);
    file.on('data', chunk => {
        data += chunk;
    });

    file.on('end', () => {
        fs.write(path.join(__dirname, 'public/uploads'));
    });

    file.on('error', (err) => {
        next(err);
    });
}

function getImage(req, res, next) {
    let { name } = req.params;
    if (!name) {
        res.end('Suck my dick!');
    }
    let _readStream = fs.createReadStream(path.join(UPLOADS, `uploads/${name}.jpeg`));
    _readStream.pipe(res);
}

exports.postImage = postImage;
exports.getImage = getImage;

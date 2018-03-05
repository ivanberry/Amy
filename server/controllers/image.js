const fs = require('fs');
const path = require('path');

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
}

exports.postImage = postImage;

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
    _readStream.on('error', (err) => {
        response.message = 'Image not Found!';
        res.json(response);
        next(err);
    });
}

exports.postImage = postImage;
exports.getImage = getImage;

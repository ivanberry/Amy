const fs = require('fs');

function postImage(req, res, next) {
    res.send('Image Uploads Success!');
}

exports.postImage = postImage;
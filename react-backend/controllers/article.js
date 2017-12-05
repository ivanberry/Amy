/**
 * Create new post
 */
const Article = require('../ultis/article');
const ArticleModel = require('../model/Article');

exports.getAllArticles = (req, res, next) => {
	const { page } = req.params;
	ArticleModel.count({})
		.then(length => {
            res.end(length);
        })
		.catch(err => {
            throw new Error(err);
        });
	next();
};

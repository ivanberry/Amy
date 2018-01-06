import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleDetail extends Component {
	// constructor(props) {
	// 	super(props);
	// 	let _articles = props.articles;
	// 	this.state = {
	// 		article: this.refactorArticle(_articles)
	// 	};
	// }

	// refactorArticle(articles) {
	// 	let id = this.props.location.hash.split('#')[1],
	// 		_article = { id: id, article_details: {} };
	// 	articles
	// 		? articles.forEach(article => {
	// 				let _id = article._id;
	// 				if (_id === id) {
	// 					let article_details;
	// 					({ _id, ...article_details } = article);
	// 					_article = {
	// 						id: id,
	// 						article_details: article_details
	// 					};
	// 				}
	// 			})
	// 		: [];
	// 	return _article;
	// }

	render() {
		// let article = this.state.article;
		// let { title, body, viewCounter, tag, createdAt, updatedAt } = article.article_details;
		let { title, body, viewCounter, tag, createdAt, updatedAt } = this.props;

		return (
			<div>
				<h2>{title}</h2>
				<hr />
				<p>{body}</p>
				<ul>
					<li>{updatedAt}</li>
					<li>{createdAt}</li>
					<li>{viewCounter}</li>
					<li>{createdAt}</li>
					<li>{viewCounter}</li>
					<li>{tag}</li>
				</ul>
			</div>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		articles: state.articles
// 	};
// }

ArticleDetail.propTypes = {
	articles: PropTypes.array,
	location: PropTypes.object
};

export default ArticleDetail;

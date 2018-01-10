import React from 'react';
import PropTypes from 'prop-types';

const ArticleDetail = props => {
	let { title, body, viewCounter, tag, createdAt, updatedAt } = props;

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
};

ArticleDetail.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	viewCounter: PropTypes.number,
	tag: PropTypes.string,
	createdAt: PropTypes.string,
	updatedAt: PropTypes.string
};

export default ArticleDetail;

import React from 'react';
import { Link } from 'react-router-dom';

const ArticleNavItem = ({ tag }) => {
	return (
		<Link to={`/t_articles/${tag}`}>
			<li>{tag}</li>
		</Link>
	);
};

export default ArticleNavItem;

import React from 'react';
import { Link } from 'react-router-dom';

const ArticleNavItem = tag => {
	return (
		<Link to={`/articles/${tag}`}>
			<li>{tag}</li>
		</Link>
	);
};

export default ArticleNavItem;

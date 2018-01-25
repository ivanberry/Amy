import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const ArticleNavItem = ({ tag }) => {
	return (
		<Link to={`/t_articles/${tag}`}>
			<li>{tag}</li>
		</Link>
	);
};

ArticleNavItem.propTypes = {
	tag: PropTypes.string
};

export default ArticleNavItem;

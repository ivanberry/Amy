import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const ArticleNavItem = ({ tag }) => {
	return (
		<NavLink activeStyle={{ color: 'rgba(0,0,0,.85)' }} to={`/t_articles/${tag}`}>
			{tag}
		</NavLink>
	);
};

ArticleNavItem.propTypes = {
	tag: PropTypes.string
};

export default ArticleNavItem;

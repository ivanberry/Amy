import React from 'react';
import PropTypes from 'prop-types';

import List from './common/List';

const Article = props => {
	const { articles, dispatch} = props;

	return (
		<ul>
			{articles && articles.length > 0 ? (
				articles.map(article => (
					<List
						key={article._id}
						{...article}
						dispatch={dispatch}
					/>
				))
			) : (
				<p>No more articles</p>
			)}
		</ul>
	);
};

Article.propTypes = {
	articles: PropTypes.array,
	showArticleDetail: PropTypes.func,
	dispatch: PropTypes.func
};

export default Article;

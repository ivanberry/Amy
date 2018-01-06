import React from 'react';
import PropTypes from 'prop-types';

import List from './common/List';

const Article = props => {
	const { articles, showArticleDetail } = props;
	return (
		<ul>
			{articles && articles.length > 0 ? (
				articles.map(article => (
					<List key={article._id} listsData={article} onClickHandler={showArticleDetail} />
				))
			) : (
				<p>No more articles</p>
			)}
		</ul>
	);
};

Article.propTypes = {
	articles: PropTypes.array,
	showArticleDetail: PropTypes.func
};

export default Article;

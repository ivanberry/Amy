import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import styles from './Article.module.css';

const Article = props => {
	const { articles, dispatch} = props;

	return (
		<ul className={styles.container}>
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

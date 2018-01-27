import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './ArticleDetail.module.css';

const ArticleDetail = props => {
	let { title, body, viewCounter, createdAt, updatedAt } = props;

	return (
		<div className={styles.container}>
			<h2>{title}</h2>
			<p>{body}</p>
		<ul>
				<li>阅读数：{viewCounter}</li>
				<li>创建于：{moment(createdAt).format('YYYY-MM-DD: HH-MM')}</li>
				<li>更新于：{moment(updatedAt).format('YYYY-MM-DD: HH-MM')}</li>
			</ul>
		</div>
	);
};

ArticleDetail.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	viewCounter: PropTypes.number,
	tag: PropTypes.array,
	createdAt: PropTypes.string,
	updatedAt: PropTypes.string
};

export default ArticleDetail;

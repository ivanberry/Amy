import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import moment from 'moment';

export const List = articles => {
	let { title, body, authorId, viewCounter, tag, createdAt, updatedAt, _id } = articles;
	moment(createdAt).format('YYYY-MM-DD: HH-MM');

	return (
		<Link to={`/articles/${title}#${_id}`}>
			<li>
				<h2>{title}</h2>
				<p>{body}</p>
				<div>
					<span>作者: {authorId.name} </span>
					<span>类别: {tag} </span>
					<span>阅读数: {viewCounter} </span>
					<span>创建于: {moment(createdAt).format('YYYY-MM-DD')} </span>
					<span>上次更新: {moment(updatedAt).format('YYYY-MM-DD')} </span>
				</div>
			</li>
		</Link>
	);
};

List.propTypes = {
	articles: PropTypes.array
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getCurrArticle } from '../../actions/actions';

import moment from 'moment';

const List = props => {
	let { title, body, authorId, viewCounter, tag, createdAt, updatedAt, _id } = props;

	moment(createdAt).format('YYYY-MM-DD: HH-MM');

	return (
		<Link to={`/article/${_id}`} onClick={() => props.dispatch(getCurrArticle(_id))}>
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
	title: PropTypes.string,
	body: PropTypes.string,
	authorId: PropTypes.object,
	viewCounter: PropTypes.number,
	tag: PropTypes.string,
	createdAt: PropTypes.string,
	updatedAt: PropTypes.string,
	_id: PropTypes.string,
	dispatch: PropTypes.func
};

export default List;

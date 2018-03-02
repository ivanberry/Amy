import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getCurrArticle } from '../../actions/actions';

import moment from 'moment';

const List = props => {
	let { title, body, authorId, viewCounter, createdAt, updatedAt, _id } = props;

	return (
		<li onClick={() => props.dispatch(getCurrArticle(_id))}>
			<Link to={`/article/${_id}`}>
				<h3>{title}</h3>
				<div>{body}</div>
				<div>
					<span>作者: {authorId.name} </span>
					<span>阅读数: {viewCounter} </span>
					<span>创建于: {moment(createdAt).format('YYYY-MM-DD')} </span>
					<span>上次更新: {moment(updatedAt).format('YYYY-MM-DD')} </span>
				</div>
			</Link>
		</li>
	);
};

List.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	authorId: PropTypes.object,
	viewCounter: PropTypes.number,
	tag: PropTypes.array,
	createdAt: PropTypes.string,
	updatedAt: PropTypes.string,
	_id: PropTypes.string,
	dispatch: PropTypes.func
};

export default List;

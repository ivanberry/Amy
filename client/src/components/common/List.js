import React from 'react';
import PropTypes from 'prop-types';

export const List = (post) => {
	let { title, body, author, views } = post;
	return (
		<li>
			<h2>{title}</h2>
			<p>{body}</p>
			<div>
				<span>{author}</span>
				<span>{views}</span>
			</div>
		</li>
	);
};

List.propTypes = {
	post: PropTypes.object
};

export default List;

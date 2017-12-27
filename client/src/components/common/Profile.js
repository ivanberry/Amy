import React from 'react';
import PropTypes from 'prop-types';

export const Profile = ( props ) => {
	const { name, avator } = props;
	return (
		<div>
			<img src={avator} alt='user avator' />
			<h3>{name}</h3>
		</div>
	);
};

Profile.propTypes = {
  name: PropTypes.string,
  avator: PropTypes.string
};
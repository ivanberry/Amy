import React from 'react';
import PropTypes from 'prop-types';

export const Profile = props => {
	const { avator } = props;
	return (
		<img src={avator} alt="user avator" width="40" height="40" style={{ borderRadius: '100%' }} />
	);
};

Profile.propTypes = {
	name: PropTypes.string,
	avator: PropTypes.string
};

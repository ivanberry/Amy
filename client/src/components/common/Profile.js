import React from 'react';
import PropTypes from 'prop-types';

export const Profile = ( props ) => {
	const { avator } = props;
	return (
			<img src={avator} style={{borderRadius: '100%'}} alt='user avator' width='50' height='50' />
	);
};

Profile.propTypes = {
  name: PropTypes.string,
  avator: PropTypes.string
};
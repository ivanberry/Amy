import React from 'react';
import PropTypes from 'prop-types';

export const Profile = ( props ) => {
	const { avator } = props;
	return (
		<div>
			<img src={avator} alt='user avator' />
		</div>
	);
};

Profile.propTypes = {
  name: PropTypes.string,
  avator: PropTypes.string
};
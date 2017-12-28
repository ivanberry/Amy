import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
	render() {
		let { rest, loggedIn } = this.props; //props for Route like path
		let Dashboard = this.props.component;
		return (
			<Route
				{...rest}
				render={ () => (loggedIn ? <Dashboard  /> : <Redirect to="/" />)}
			/>
		);
	}
}

PrivateRoute.propTypes = {
	rest: PropTypes.any,
	loggedIn: PropTypes.bool,
	component: PropTypes.func
};

function mapStateToProps(state) {
	return {
		loggedIn: state.loggedIn
	};
}

export default connect(mapStateToProps)(PrivateRoute);

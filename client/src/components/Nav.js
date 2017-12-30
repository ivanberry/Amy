import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOut } from '../actions/actions';

/**
 * 根据登录态决定顶部导航的状态
 * 0:未登录，（登录）
 * 1:已登录，(用户名)
 */
class Nav extends Component {
	handleSubmit = () => {
		this.props.dispatch(logOut(''));
		setTimeout(this.props.history.goBack(), 300);
	};

	render() {
		return (
			<nav>
				<Link to="/">Index</Link>
				{this.props.loggedIn ? (
					<div>
						<Link to="/dashboard">{this.props.username} Dashboard</Link>
						<button type="submit" onClick={this.handleSubmit}>
							Logout
						</button>
					</div>
				) : (
					<Link to="/login">Login</Link>
				)}
				<hr />
			</nav>
		);
	}
}

Nav.propTypes = {
	loggedIn: PropTypes.bool,
	username: PropTypes.string,
	handleSubmit: PropTypes.func
};

function mapStateToProps(state) {
	return {
		loggedIn: state.loggedIn,
		username: state.username
	};
}

export default withRouter(connect(mapStateToProps)(Nav));

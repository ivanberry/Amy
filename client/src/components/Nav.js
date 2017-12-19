import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOut } from '../actions/actions';

/**
 * 根据登录态决定顶部导航的状态
 * 0:未登录，（登录）
 * 1:已登录，(用户名)
 */
class Nav extends Component {
	handleSubmit = () => {
		this.props.dispatch(logOut(''));
	};

	render() {
		return (
			<div>
				{this.props.loggedIn ? (
					<div>
						<Link to="/dashboard">{this.props.username}</Link>
						<button type="submit" onClick={this.handleSubmit}>
							Logout
						</button>
					</div>
				) : (
					<nav>
						<ul>
							<li>
								<Link to="/">Index</Link>
								<Link to="/login">Login</Link>
							</li>
						</ul>
					</nav>
				)}
			</div>
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

export default connect(mapStateToProps)(Nav);

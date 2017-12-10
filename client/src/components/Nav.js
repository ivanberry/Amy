import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 根据登录态决定顶部导航的状态
 * 0:未登录，（登录）
 * 1:已登录，(用户名)
 */
class Nav extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('component did mount');
	}

	render() {
		return (
			<div>
				{this.props.loggedIn ? (
					<div>
						<button>{this.props.name}</button>
					</div>
				) : (
					<div>
						<button>Login</button>
					</div>
				)}
			</div>
		);
	}
}

Nav.propTypes = {
	loggedIn: PropTypes.bool,
	name: PropTypes.string
};

export default Nav;

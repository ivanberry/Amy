import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logOut } from '../actions/actions';

/**
 * 根据登录态决定顶部导航的状态
 * 0:未登录，（登录）
 * 1:已登录，(用户名)
 */
class Nav extends Component {
	constructor(props) {
		super(props);
		console.table(props);
	}

	componentWillMount() {
		console.log('Nav component will mount');
	}

	componentDidMount() {
		console.log('Nav component did mount');
	}

	componentWillReceiveProps(prevProps, nextProps) {
		console.log(prevProps, nextProps);
		console.log('Nav component props receive');
		return prevProps.loggedIn !== nextProps.loggedIn;
	}

	//why twice call?
	componentDidUpdate() {
		console.log('Nav component did update');
	}

	handleSubmit = () => {
		this.props.dispatch(logOut(''));
	};

	render() {
		return (
			<div>
				{this.props.loggedIn ? (
					<div>
						<button>{this.props.username}</button>
						<button type="submit" onClick={this.handleSubmit}>
							Logout
						</button>
					</div>
				) : (
					<div>
						<button>Index</button>
						<button>Login</button>
					</div>
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

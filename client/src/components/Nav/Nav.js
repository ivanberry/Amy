import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Profile } from '../common/Profile';
import PopOver from '../common/PopOver/PopOver';

import { logOut } from '../../actions/actions';
import styles from './Nav.module.css';

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false
		};
	}

	handleSubmit = () => {
		this.props.dispatch(logOut(''));
		setTimeout(this.props.history.goBack(), 300);
	};

	onClickHandler = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	render() {
		const avator =
			'data:image/jpeg;base64,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';
		return (
			<nav className={styles.container}>
				<NavLink to="/">
					<svg className="svgIcon-use" width="138" height="27" viewBox="0 0 138 27">
						<path d="M130 27V16.96c0-3.26-.154-5.472-2.437-5.472-1.16 0-2.138.57-2.863 1.512.217.906.3 1.968.3 3.127 0 2.247.036 5.11 0 7.973 0 .472-.046.58.244.87L127 27h-8V16.96c0-3.297-.461-5.472-2.708-5.472-1.16 0-1.64.653-2.292 1.595V24.1c0 .472-.026.58.3.87L116 27h-8V11.56c0-.47-.07-.579-.36-.905L106 9h8v3.612c.906-2.537 2.437-4.112 5.372-4.112 2.682 0 4.494 1.466 5.255 4.257.834-2.392 3.008-4.257 6.053-4.257 3.588 0 5.32 2.626 5.32 7.627 0 2.392.036 5.11 0 7.973 0 .472.004.652.25.87L138 27h-8zm-27-3.045c0 .472-.149.617.178.906L105 27h-8v-4c-.906 2.465-2.956 4-5.637 4C87.775 27 86 24.39 86 19.461c0-2.391-.036-5 0-7.936 0-.471-.11-.58-.4-.87L84 9h8v9.628c0 3.225.269 5.4 2.298 5.4 1.16 0 2.086-.725 2.702-1.63V11.56c0-.471-.129-.58-.419-.906L95 9h8v14.955zM78.002.25A3.248 3.248 0 0 1 81.25 3.5 3.25 3.25 0 1 1 78.002.25zM75 27V11.56c0-.47.168-.579-.122-.905L73 9h8v15.1c0 .472-.01.678.24.9L83 27h-8zM64 11.706c-.507-.652-1.418-1.123-2.396-1.123-1.957 0-3.842 1.775-3.842 7.03 0 4.93 1.631 6.669 3.66 6.669.907 0 1.853-.436 2.578-1.378V11.706zm6 12.286c0 .47-.026.58.3.87L72 27h-8v-3.697C62.913 25.804 60.951 27 58.632 27 54.5 27 51.5 23.738 51.5 17.795c0-5.582 3.254-9.314 7.784-9.314 2.356 0 3.919 1.123 4.716 2.899V3.878c0-.471-.077-.617-.403-.906L62 1.305 70 .29v23.702zM43.9 16c.037-.471.037-.67.037-.815 0-4.747-.937-5.435-2.437-5.435-1.5 0-2.854.995-2.927 6.25h5.328zm-5.327 1c0 4.711 2.392 6.63 5.183 6.63 2.174 0 4.313-.943 5.509-3.335h.072c-.942 4.566-3.77 6.705-8.01 6.705-4.566 0-8.879-2.755-8.879-9.133 0-6.705 4.277-9.386 9.097-9.386 3.842 0 7.937 1.811 7.937 7.646 0 .109 0 .438-.036.873H38.573zM31.5 27h-12l2.39-2.646c.084-.084.11-.399.11-.87V7l-7.866 20L5.581 8.372C5.364 7.9 5.181 7.285 5 6.777V20.62c0 .58-.035.653.364 1.196L9 27H0l3.64-5.183c.399-.543.36-.616.36-1.196V6.27c0-.617.095-.69-.195-1.051L1 1h8.495l7.355 16.3L23.24 1h8.26l-2.2 2.75c-.326.326-.3.599-.3 1.106v18.629c0 .47.005.75.138.87L31.5 27z" />
					</svg>
				</NavLink>
				{this.props.loggedIn ? (
					<div>
						<div className={styles['user-container']} onClick={this.onClickHandler}>
							{/* <NavLink to="/dashboard">{this.props.username}</NavLink> */}
							<Profile avator={avator} />
						</div>
						{this.state.isActive ? (
							<PopOver
								items={[
									{ content: 'new story', path: '/new-story' },
									{ content: 'Profile', path: '/' },
									{ content: 'Logout', path: '/logout' }
								]}
							/>
						) : null}
						{/* <button type="submit" onClick={this.handleSubmit}> */}
						{/* Logout */}
						{/* </button> */}
					</div>
				) : (
					<NavLink to="/login">Login</NavLink>
				)}
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

export default connect(mapStateToProps)(Nav);

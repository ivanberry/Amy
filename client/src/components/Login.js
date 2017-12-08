/**
 * Login components
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginIn } from '../actions/actions';

class LoginForm extends Component {
	constructor(props) {
		super(props);
	}

	onSubmit(evt) {
		let user = {
			name: 'tab',
			password: 'tab'
		};
		evt.preventDefault();
		this.props.dispatch(loginIn(user));
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<input name="username" type="text" />
				<input name="password" type="password" />
				<button name="submit" type="submit">
					submit
				</button>
			</form>
		);
	}
}

export default connect()(LoginForm);

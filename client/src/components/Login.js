/**
 * Login components
 */

import React, { Component } from 'react';
import { changeForm } from '../actions/actions';

class LoginForm extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form>
				<input name="username" type="text" />
				<input name="password" type="password" />
				<input name="submit" type="submit" />
			</form>
		);
	}
}

export default LoginForm;

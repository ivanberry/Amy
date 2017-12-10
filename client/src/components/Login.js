import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './common/Form';
import { logInRequest } from '../actions/actions';

class Login extends Component {

	_login = (username, password) => {
		this.props.dispatch(logInRequest({ username, password }));
	};

	render() {
		return (
			<Form
				onSubmit={this._login}
				btnText="Login"
			/>
		);
	}
}

export default connect()(Login);

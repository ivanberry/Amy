import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Form from './common/Form';
import { logInRequest } from '../actions/actions';

class Login extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	_login = (username, password) => {
		this.props.dispatch(logInRequest({ username, password }));
	};

	componentDidMount() {
		console.log('Login Component did mount');
	}

	componentDidUpdate() {
		console.log('Login Component did update');
	}

	componentWillUnmount() {
		console.log('Login Component will unmount');
	}

	render() {
		return <Form onSubmit={this._login} btnText="Login" />;
	}
}

export default withRouter(connect()(Login));

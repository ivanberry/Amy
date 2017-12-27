import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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
		const { loggedIn } = this.props;
		return loggedIn ? <Redirect to='/' /> : <Form onSubmit={this._login} btnText="Login" />;
	}
}

Login.propTypes = {
	loggedIn: PropTypes.bool
};

function mapStateToProps(state) {
	return {
		loggedIn: state.loggedIn
	};
}

export default withRouter(connect()(Login));

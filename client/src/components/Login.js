/**
 * Login components
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginIn } from '../actions/actions';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		};
	}

	handleSubmit = evt => {
		const user = this.state;
		const { dispatch } = this.props;
		evt.preventDefault();
		dispatch(loginIn(user));
	};

	handleInputChange = evt => {
		console.log(this, evt);
		this.setState({
			name: 'tab',
			password: 'tab'
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="username" type="text" onChange={this.handleInputChange} />
				<input name="password" type="password" onChange={this.handleInputChange} />
				<button name="submit" type="submit">
					submit
				</button>
			</form>
		);
	}
}

export default connect()(LoginForm);

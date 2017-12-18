/**
 * Login components
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleSubmit = evt => {
		evt.preventDefault();
		const { username, password } = this.state;
		this.props.onSubmit(username, password);
		this.setState({
			username: '',
			password: ''
		});
	};

	changeUsername = evt => {
		this.setState({
			username: evt.target.value
		});
	};

	changePassword = evt => {
		this.setState({
			password: evt.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="username" type="text" onChange={this.changeUsername} />
				<input name="password" type="password" onChange={this.changePassword} />
				<button name="submit" type="submit">
					{this.props.btnText}
				</button>
			</form>
		);
	}
}

Form.protoTypes = {
	onSubmit: PropTypes.func,
	btnText: PropTypes.string
};

export default Form;

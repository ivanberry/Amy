/**
 * Login components
 */
import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleSubmit = evt => {
		const {username, password} = this.state;
		evt.preventDefault();
		this.props.onSubmit(username, password);
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

export default Form;

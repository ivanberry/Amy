import React, { Component } from 'react';
import { connect } from 'react-redux';
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

	render() {
		return (
			<Form
				onSubmit={this._login}
				dispatch={this.props.dispatch}
				btnText="Login"
			/>
		);
	}
}

//将返回的数据映射为组件本身的props
function mapStateToProps() {
	return {
    test: 'test'
	};
}

export default connect(mapStateToProps)(Login);

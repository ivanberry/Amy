import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logOut } from '../../actions/actions';

class Logout extends Component {

	componentDidMount() {
		this.props.dispatch(logOut(''));
	}

	//前端退出
	//反问后台退出接口
	render() {
		return <h1>Welcome Back</h1>;
	}
}

export default connect()(Logout);

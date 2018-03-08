import React, { Component } from 'react';
import PropType from 'prop-types';
import {Redirect} from 'react-router';

import { connect } from 'react-redux';

import { logOut } from '../../actions/actions';

class Logout extends Component {

	componentDidMount() {
		this.props.dispatch(logOut(''));
	}

	//前端退出
	//反问后台退出接口
	render() {
		return <Redirect to='/' />;
	}
}

Logout.propTypes = {
	dispatch: PropType.func
};

export default connect()(Logout);

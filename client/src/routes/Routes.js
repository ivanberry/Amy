import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from '../components/Login';
import Dashboard from '../components/Dashboard';

class Routes extends Component {
	render() {
		return (
			<div>
				<Route path="/login" component={LoginForm} />
				<Route path="/dashboard" component={Dashboard} />
			</div>
		);
	}
}

export default Routes;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from '../components/Login';
import Dashboard from '../components/Dashboard';
import ArticleFeed from '../components/ArticleFeed';
import PrivateRoute from '../components/PrivateRoute';

class Routes extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={ArticleFeed} />
				<Route path="/login" component={LoginForm} />
				<PrivateRoute path='dashboard' component={Dashboard} />
			</div>
		);
	}
}

export default Routes;

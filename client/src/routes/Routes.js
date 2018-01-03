import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from '../components/Login';
import Dashboard from '../components/Dashboard';
import ArticleFeed from '../components/ArticleFeed';
import ArticleDetails from '../components/ArticleDetails';
import PrivateRoute from '../components/PrivateRoute';

class Routes extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={ArticleFeed} />
				<Route path="/login" component={LoginForm} />
				<Route path="/articles/:title" component={ArticleDetails} />
				<PrivateRoute path="dashboard" component={Dashboard} />
			</div>
		);
	}
}

export default Routes;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from '../components/Login';
import Dashboard from '../components/Dashboard';
import AllArticleFeed from '../components/AllArticleFeed';
import ArticleDetailContainer from '../container/ArticleDetailContainer';
import PrivateRoute from '../components/PrivateRoute';

class Routes extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={AllArticleFeed} />
				<Route path="/login" component={LoginForm} />
				<Route path="/article/:id" component={ArticleDetailContainer} />
				<Route path="/t_articles/:tag" component={AllArticleFeed} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
			</div>
		);
	}
}

export default Routes;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from '../components/Login';
import Dashboard from '../components/Dashboard';
import HomeArticleFeed from '../components/HomeArticleFeed';
import ArticleDetailContainer from '../container/ArticleDetailContainer';
import TypeArticleFeed from '../components/TypeArticleFeed';
import PrivateRoute from '../components/PrivateRoute';

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomeArticleFeed} />
				<Route path="/login" component={LoginForm} />
				<Route path="/article/:id" component={ArticleDetailContainer} />
				<Route path="/t_articles/:tag" component={TypeArticleFeed} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
			</Switch>
		);
	}
}

export default Routes;

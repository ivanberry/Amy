import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from '../components/Login/Login';
import Dashboard from '../components/Dashboard';
import Logout from '../components/Logout/Logout';
import HomeArticleFeed from '../components/HomeArticleFeed';
import ArticleDetailContainer from '../container/ArticleDetail/ArticleDetailContainer';
import TypeArticleFeed from '../components/TypeArticleFeed';
import EditorContainer from '../container/EditorContainer/EditorContainer';
import PrivateRoute from '../components/PrivateRoute';

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomeArticleFeed} />
				<Route path="/login" component={LoginForm} />
				<Route path="/logout" component={Logout} />
				<Route path="/article/:id" component={ArticleDetailContainer} />
				<Route path="/t_articles/:tag" component={TypeArticleFeed} />
				<Route path="/new-story" component={EditorContainer} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
			</Switch>
		);
	}
}

export default Routes;

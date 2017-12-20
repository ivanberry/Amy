import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Article from '../components/Article';
import LoginForm from '../components/Login';

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={LoginForm} />
				<Route path="/articles" component={Article} />
			</Switch>
		);
	}
}

export default Routes;

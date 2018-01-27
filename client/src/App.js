import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './typo.css';
import Main from './App.module.css';

import Nav from './components/Nav/Nav';
import Indicator from './components/Indicator';

import Routes from './routes/Routes';
import ArticleNavContainer from './container/ArticleNav/ArticleNavContainer';

class App extends Component {
	render() {
		return (
			<div className={Main.maxWidth}>
				<Indicator />
				<div className={Main.navContainer}>
					<Route component={Nav} />
					<Route component={ArticleNavContainer} />
				</div>
				<Routes />
			</div>
		);
	}
}

export default App;

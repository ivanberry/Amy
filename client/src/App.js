import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/Login';
import Nav from './components/Nav';
import Article from './components/Article';
import Indicator from './components/common/Indicator';

class App extends Component {
	
	render() {
		return (
			<div>
				<Indicator />
				<Nav />
				<LoginForm />
				<Article />
			</div>
		);
	}
}

export default App;

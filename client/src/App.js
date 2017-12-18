import React, { Component } from 'react';

import './App.css';

import Nav from './components/Nav';
import Article from './components/Article';
import Indicator from './components/Indicator';

class App extends Component {
	
	render() {
		return (
			<div>
				<Indicator />
				<Nav />
				<Article />
			</div>
		);
	}
}

export default App;

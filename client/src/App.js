import React, { Component } from 'react';

import './App.css';

import Nav from './components/Nav';
import Indicator from './components/Indicator';

import Routes from './routes/Routes';

class App extends Component {
	render() {
		return (
			<div>
				<Indicator />
				<Nav />
				<div className="routeContainer">
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;

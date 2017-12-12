import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/Login';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<LoginForm />
			</div>
		);
	}
}

export default App;

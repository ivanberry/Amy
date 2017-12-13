import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/Login';
import Nav from './components/Nav';
import Article from './components/Article';

class App extends Component {

	constructor(props) {
		super(props);
		console.dir(props);
	}

	componentWillMount() {
		console.log('App component will mount');
	}

	componentDidMount() {
		console.log('App component did mount');
	}

	componentWillReceiveProps(prevProps, nextProps) {
		console.log('App component props receive');
		return prevProps.loggedIn !== nextProps.loggedIn;
	}
	componentDidUpdate() {
		console.log('App component did update');
	}
	render() {
		return (
			<div>
				<Nav />
				<LoginForm />
				<Article />
			</div>
		);
	}
}

export default App;

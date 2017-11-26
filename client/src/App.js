import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		fetch('/api/users')
			.then(res => {
				return res.json();
			})
			.then(users => {
				let _data = users.data;
				this.setState({ users: _data });
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="App">
				<h1>Users</h1>
				{this.state.users.map(user => <div key={user._id}>{user.name}</div>)}
			</div>
		);
	}
}

export default App;

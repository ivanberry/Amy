import React, { Component } from 'react';

import HomeArticleFeed from '../components/HomeArticleFeed';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		};
	}

	componentDidMount() {
		let _name = JSON.parse(localStorage.getItem('user'));
		this.setState({
			name: _name
		});
	}

	render() {
		return <HomeArticleFeed />;
	}
}
export default Dashboard;

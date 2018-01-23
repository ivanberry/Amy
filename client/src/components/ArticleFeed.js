import React, { Component } from 'react';
import ArticleContainer from '../container/ArticleContainer';

class ArticleFeed extends Component {

	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps)
	}

	render() {
		return <ArticleContainer />;
	}
}

export default ArticleFeed;

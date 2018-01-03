import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticleDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			article: this.props.articles
		};
	}

	render() {
		return <span>xxx</span>;
	}
}

function mapStateToProps(state) {
	return {
        articles: state.articles,
	};
}

export default connect(mapStateToProps)(ArticleDetails);

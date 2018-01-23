import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleContainer from '../container/ArticleContainer';
import { getArticleRequest } from '../actions/actions';

class AllArticleFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
	}

	componentDidMount() {
		this.props.dispatch(getArticleRequest());
	}

	filterArticleWithTag = tag => {
		if (tag) {
			//why not return the filter new article
			let articles_filtered = this.props.articles.filter(article => {
				let { tags } = article;
				return tags.indexOf(tag) > -1;
			});
			this.setState({
				articles: articles_filtered
			});
		}
	};

	componentWillReceiveProps(nextProps) {
		let { tag } = nextProps.match.params;
		tag && this.filterArticleWithTag(tag);
	}

	render() {
		return <ArticleContainer articles={this.state.articles} dispatch={this.props.dispatch} />;
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles
	};
}

export default connect(mapStateToProps)(AllArticleFeed);

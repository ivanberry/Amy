import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleContainer from '../container/ArticleContainer';
import { getArticleRequest } from '../actions/actions';

// import LoaderHOC from '../HOC/Loader';

class AllArticleFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: this.props.articles
		};
	}

	componentDidMount() {
		this.props.dispatch(getArticleRequest()); //async request
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

	//wont be called on component initlize process
	componentWillReceiveProps(nextProps) {
		// let { tag } = nextProps.match.params;
		// tag && this.filterArticleWithTag(tag);
	}

	render() {
		return <ArticleContainer articles={this.props.articles} dispatch={this.props.dispatch} />;
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles,
		dispatch: state.dispatch,
		isFetching: state.isFetching
	};
}

export default connect(mapStateToProps)(AllArticleFeed);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleDetail from '../components/ArticleDetail';
import { getArticleWithId } from '../actions/actions';

class ArticleDetailContainer extends Component {
	componentDidMount() {
		let _id = this.props.match.params['id'];
		this.props.dispatch(getArticleWithId(_id));
	}

	render() {
		return <ArticleDetail {...this.props.articles[0]} />;
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles
	};
}

export default connect(mapStateToProps)(ArticleDetailContainer);

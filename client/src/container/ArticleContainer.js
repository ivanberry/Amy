import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Article from '../components/Article';
import { getArticleRequest } from '../actions/actions';

class ArticleContainer extends Component {
	//fetch data with saga
	componentDidMount() {
		this.props.dispatch(getArticleRequest());
	}

	render() {
		return (
			<Article articles={this.props.articles} dispatch={this.props.dispatch}/>
		);
	}
}

ArticleContainer.propTypes = {
	dispatch: PropTypes.func,
	articles: PropTypes.array
};

function mapStateToProps(state) {
	return {
		articles: state.articles
	};
}

export default connect(mapStateToProps)(ArticleContainer);

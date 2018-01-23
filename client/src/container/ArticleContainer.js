import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import Article from '../components/Article';
// import { getArticleRequest } from '../actions/actions';

class ArticleContainer extends Component {

	render() {
		return <Article articles={this.props.articles} dispatch={this.props.dispatch} />;
	}
}

ArticleContainer.propTypes = {
	dispatch: PropTypes.any,
	articles: PropTypes.array
};

// function mapStateToProps(state) {
// 	return {
// 		articles: state.articles
// 	};
// }

export default ArticleContainer;

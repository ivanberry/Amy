import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from '../components/Article';

class ArticleContainer extends Component {

	render() {
		return <Article articles={this.props.articles} dispatch={this.props.dispatch} />;
	}
}

ArticleContainer.propTypes = {
	dispatch: PropTypes.func,
	articles: PropTypes.array
};

export default ArticleContainer;

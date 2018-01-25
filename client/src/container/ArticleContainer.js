import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Article from '../components/Article';

class ArticleContainer extends Component {

	render() {
		let { articles, dispatch } = this.props;
		return (
			articles ?
				<Article articles={articles} dispatch={dispatch} /> :
				<Redirect to='/' />
		);
	}
}

ArticleContainer.propTypes = {
	dispatch: PropTypes.func,
	articles: PropTypes.array
};

export default ArticleContainer;

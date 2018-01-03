import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from './common/List';
import { getArticleRequest } from '../actions/actions';

class Article extends Component {

	componentDidMount() {
		this.props.dispatch(getArticleRequest());
	}

	componentDidUpdate() {
		console.log('Article component Update');
	}

	render() {
		const { articles } = this.props;
		return (
			<ul>
				{articles && articles.length > 0 ? (
					articles.map(article => (
						<List key={article._id} {...article} />
					))
				) : (
					<p>No more articles</p>
				)}
			</ul>
		);
	}
}

Article.propTypes = {
	articles: PropTypes.array,
	onClick: PropTypes.func,
	loggedIn: PropTypes.bool
};

function mapStateToProps(state) {
	return {
		articles: state.articles,
		loggedIn: state.loggedIn
	};
}

export default connect(mapStateToProps)(Article);

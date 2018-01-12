import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import ArticleDetail from '../components/ArticleDetail';
import { getCurrArticle } from '../actions/actions';

class ArticleDetailContainer extends Component {

	componentDidMount() {
		let _id = this.props.match.params['id'];
		this.props.dispatch(getCurrArticle(_id));
	}

	render() {
		return <ArticleDetail {...this.props.currentArticle} />;
	}
}

ArticleDetailContainer.propTypes = {
	match: PropTypes.object,
	dispatch: PropTypes.func,
	currentArticle: PropTypes.any
};

function mapStateToProps(state) {
	return {
		currentArticle: state.currentArticle
	};
}

export default connect(mapStateToProps)(ArticleDetailContainer);

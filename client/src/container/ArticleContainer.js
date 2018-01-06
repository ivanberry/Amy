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
  
  showArticleDetail = (article) => {
    console.log('show article detail!');
  }

	render() {
		return <Article articles={this.props.articles} showArticleDetail={this.showArticleDetail} />;
	}
}

ArticleContainer.propTypes = {
	dispatch: PropTypes.func
};

function mapStateToProps(state) {
	return {
    dispatch: state.dispatch,
    articles: state.articles
	};
}

export default connect(mapStateToProps)(ArticleContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ArticleDetail from '../components/ArticleDetail';
import { getArticleWithId } from '../actions/actions';

class ArticleDetailContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			article: []
		};
	}

	componentDidMount() {
		let _id = this.props.match.params['id'];
		axios.get(`/api/article/${_id}`).then(res => {
			this.setState({ article: res.data.data[0] });
		});
	}

	render() {
		return <ArticleDetail {...this.state.article} />;
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles
	};
}

export default connect(mapStateToProps)(ArticleDetailContainer);

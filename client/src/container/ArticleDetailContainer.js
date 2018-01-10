import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

import ArticleDetail from '../components/ArticleDetail';

class ArticleDetailContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			article: []
		};
	}

	componentDidMount() {
		console.log('artile detail container did mount');
		let _id = this.props.match.params['id'];
		axios.get(`/api/article/${_id}`).then(res => {
		this.setState({ article: res.data.data[0] });
		});
	}

	render() {
		return <ArticleDetail {...this.state.article} location={this.props.location} />;
	}
}

ArticleDetailContainer.propTypes = {
	match: PropTypes.object
};

export default ArticleDetailContainer;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from './common/List';
import { getArticleRequest } from '../actions/actions';

class Article extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	handleArticleClick = () => {
		console.log('Article clicked');
	};

	//fetch Data
	componentDidMount() {
		console.log('Article component did mount');
		this.props.dispatch(getArticleRequest());
	}

	render() {
		const { articles } = this.props;
		debugger;
		return (
			<ul>
				{articles && articles.length > 0 ? (
					articles.map(article => (
						<List key={article._id} {...article} onClick={this.handleArticleClick} />
					))
				) : (
					<p>Add new article</p>
				)}
			</ul>
		);
	}
}

Article.propType = {
	articles: PropTypes.array,
	onClick: PropTypes.func
};

function mapStateToProps(state) {
	return {
		articles: state.articles
	};
}

export default connect(mapStateToProps)(Article);

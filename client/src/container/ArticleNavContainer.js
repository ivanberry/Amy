import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTyps from 'prop-types';
import ArticleNavItem from '../components/ArticleNavItem';

class ArticleNavContainer extends Component {
	// fetch all tag
	componentDidMount() {}

	render() {
		return (
			<ul>
				<ArticleNavItem tags={this.props.tags} />
			</ul>
		);
	}
}

ArticleNavContainer.propTypes = {
	tags: PropTyps.array
};

function mapStateToProps(state) {
	return {
		tags: state.tags
	};
}

export default connect(mapStateToProps)(ArticleNavContainer);

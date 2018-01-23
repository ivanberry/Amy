import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTyps from 'prop-types';
import ArticleNavItem from '../components/ArticleNavItem';

class ArticleNavContainer extends Component {
	// fetch all tag
	render() {
		return (
			<ul>
				{
					['React', 'Vue'].map(tag => (
						<ArticleNavItem key={tag} tag={tag} />
					))
				}
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

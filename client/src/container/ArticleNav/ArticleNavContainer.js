import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTyps from 'prop-types';

import ArticleNavItem from '../../components/ArticleNavItem';
import styles from './ArticleNav.module.css';
import { getTagsRequest } from '../../actions/actions';

class ArticleNavContainer extends Component {
	componentDidMount() {
		this.props.dispatch(getTagsRequest());
	}

	// fetch all tag
	render() {
		return (
				<div className={styles.container}>
					{this.props.tags.map(tag => <ArticleNavItem key={tag.name} tag={tag.name} />)}
				</div>
		);
	}
}

ArticleNavContainer.propTypes = {
	tags: PropTyps.array,
	dispatch: PropTyps.func
};

function mapStateToProps(state) {
	return {
		tags: state.tags,
		dispatch: state.dispatch
	};
}

export default connect(mapStateToProps)(ArticleNavContainer);

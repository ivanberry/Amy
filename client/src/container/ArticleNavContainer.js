import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTyps from 'prop-types';
import ArticleNavItem from '../components/ArticleNavItem';
import { getTagsRequest } from '../actions/actions';

class ArticleNavContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getTagsRequest());
    }

	// fetch all tag
	render() {
		return (
			<ul>
				{
					this.props.tags.map(tag => (
						<ArticleNavItem key={tag.name} tag={tag.name} />
					))
				}
			</ul>
		);
	}
}

ArticleNavContainer.propTypes = {
    tags: PropTyps.array,
    dispatch: PropTyps.dispatch
};

function mapStateToProps(state) {
	return {
				tags: state.tags,
				dispatch: state.dispatch
	};
}

export default connect(mapStateToProps)(ArticleNavContainer);

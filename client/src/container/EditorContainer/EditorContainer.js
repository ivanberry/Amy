import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Editor from '../../components/common/Editor/Editor';

import { getTagsRequest } from '../../actions/actions';

class EditorContainer extends Component {

	componentDidMount() {
		this.props.dispatch(getTagsRequest());
	}

	render() {
		return <Editor history={this.props.history} tags={this.props.tags} />;
	}
}

EditorContainer.propTypes = {
	history: PropTypes.object,
	tags: PropTypes.array,
	dispatch: PropTypes.func
};

function mapStateToProps(state) {
	return {
		tags: state.tags
	};
}

export default connect(mapStateToProps)(EditorContainer);

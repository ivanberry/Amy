import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from '../../components/common/Editor/Editor';

class EditorContainer extends Component {
	render() {
		return <Editor history={this.props.history} />;
	}
}

EditorContainer.propTypes = {
	history: PropTypes.object
};

export default EditorContainer;

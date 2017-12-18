import React, { Component } from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';

class Indicator extends Component {
	render() {
		const { isFetching } = this.props;
		return (
			<div>
				{isFetching ? (
					'Fetching Datas'
				) : (
					''
				)}
			</div>
		);
	}
}

Indicator.propTypes = {
	isFetching: PropsType.bool
};

function mapStateToProps(state) {
	return {
		isFetching: state.isFetching
	};
}

export default connect(mapStateToProps)(Indicator);

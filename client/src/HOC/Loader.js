import React, { Component } from 'react';

const LoaderHOC =  WrapComponent => {
	return class LoaderHOC extends Component {
		render() {
			return this.props.isFetching ? <div>Loading</div> : <WrapComponent {...this.props} />;
		}
	};
};

export default LoaderHOC;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from '../components/Login';

class Routes extends Component {
	render() {
		return <Switch>
      <Route path='/login' component={LoginForm} />
    </Switch>;
	}
}

export default Routes;

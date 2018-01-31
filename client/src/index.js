import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './store/Store';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
// registerServiceWorker();

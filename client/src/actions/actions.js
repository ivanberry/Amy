import {
	REGISTE_USER,
	LOGIN_IN,
	LOGIN_OUT,
	POST_ARTICLE,
	UPDATE_ARTICLE,
	DELETE_ARTICLE,
	SENDING_REQUEST,
	CHANGE_FORM
} from '../constants/actionTypes';

import axios from 'axios';

/**
 * action creators: Actions describe the fact that something happened,
 * but don't specify how the application's state changes in response
 */
export const registeUser = user => {
	return {
		type: REGISTE_USER,
		user
	};
};

export const loginIn = (username, password) => {
	return dispatch => {
		//show the loading incicator, hide the last error
		dispatch(sendingRequest(true));
		//if no username or password was specified, throw a field-missing error
		axios
			.post('/api/user', {
				username: 'tab',
				password: 'tab'
			})
			.then(response => {
				dispatch(sendingRequest(false));
				changeForm({
					username: '',
					password: ''
				});
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const loginOut = user => {
	return {
		type: LOGIN_OUT,
		user
	};
};

export const postArticle = article => {
	return {
		type: POST_ARTICLE,
		article
	};
};

export const updateArticle = id => {
	return {
		type: UPDATE_ARTICLE,
		id
	};
};

export const deleteArticle = id => {
	return {
		type: DELETE_ARTICLE,
		id
	};
};

export function sendingRequest(sending) {
	return {
		type: SENDING_REQUEST,
		sending
	};
}

export function changeForm(newState) {
	return {
		type: CHANGE_FORM,
		newState
	};
}

/**
 * ultis
 */

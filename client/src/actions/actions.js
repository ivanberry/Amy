import {
	REGISTE_USER,
	LOGIN_REQUEST,
	LOGOUT,
	POST_ARTICLE,
	UPDATE_ARTICLE,
	DELETE_ARTICLE,
	SENDING_REQUEST,
	SET_AUTH
} from '../constants/actionTypes';

/**
 * action creators: Actions describe the fact that something happened,
 * but don't specify how the application's state changes in response
 */
export const registeUserRequest = user => {
	return {
		type: REGISTE_USER,
		user
	};
};

export const setAuthState = loggedIn => {
	return {
		type: SET_AUTH,
		loggedIn
	};
};

export const logInRequest = (user) => {
    return {
				type: LOGIN_REQUEST,
				user
    };
};

export const logOut= user => {
	return {
		type: LOGOUT,
		user
	};
};

export const postArticleRequest = article => {
	return {
		type: POST_ARTICLE,
		article
	};
};

export const updateArticleRequest = id => {
	return {
		type: UPDATE_ARTICLE,
		id
	};
};

export const deleteArticleRequest = id => {
	return {
		type: DELETE_ARTICLE,
		id
	};
};

export function sendingRequest(isFetching) {
	return {
		type: SENDING_REQUEST,
		isFetching
	};
}
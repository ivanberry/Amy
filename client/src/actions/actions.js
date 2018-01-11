import * as ActionTypes from '../constants/actionTypes';

/**
 * action creators: Actions describe the fact that something happened,
 * but don't specify how the application's state changes in response
 */
export const registeUserRequest = user => {
	return {
		type: ActionTypes.REGISTE_USER,
		user
	};
};

export const setAuthState = loggedIn => {
	return {
		type: ActionTypes.SET_AUTH,
		loggedIn
	};
};

export const logInRequest = user => {
	return {
		type: ActionTypes.LOGIN_REQUEST,
		user
	};
};

export const logOut = user => {
	return {
		type: ActionTypes.LOGOUT,
		user
	};
};

export const getArticleRequest = () => {
	return {
		type: ActionTypes.GET_ARTICLE
	};
};

export const getCurrArticle = id => {
	return {
		type: ActionTypes.GET_ARTICLE_WITH_ID,
		id
	};
};

export const getCurrArticleSucc = currentArticle => {
	return {
		type: ActionTypes.GET_CURR_ARTICLE_SUCCESS,
		currentArticle
	};
};

export const getArticleSuccess = articles => {
	return {
		type: ActionTypes.GET_ARTICLE_SUCCESS,
		articles
	};
};

export const postArticleRequest = article => {
	return {
		type: ActionTypes.POST_ARTICLE,
		article
	};
};

export const updateArticleRequest = id => {
	return {
		type: ActionTypes.UPDATE_ARTICLE,
		id
	};
};

export const deleteArticleRequest = id => {
	return {
		type: ActionTypes.DELETE_ARTICLE,
		id
	};
};

export function sendingRequest(isFetching) {
	return {
		type: ActionTypes.SENDING_REQUEST,
		isFetching
	};
}

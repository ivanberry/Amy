/**
 * specify how the application's state changes in response
 */
import * as ActionTypes from '../constants/actionTypes';

//The initial state
const initialState = {
	isFetching: false,
	loggedIn: false,
	username: '',
	currentArticle: {},
	tags: []
};

export function homeReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SET_AUTH:
			return {
				...state,
				loggedIn: action.loggedIn
			};
		case ActionTypes.SENDING_REQUEST:
			return {
				...state,
				isFetching: action.isFetching
			};
		case ActionTypes.LOGIN_REQUEST:
			return {
				...state,
				username: action.user.username
			};
		case ActionTypes.LOGOUT:
			return {
				...state,
				username: ''
			};
		case ActionTypes.GET_ARTICLE_SUCCESS:
			return {
				...state,
				articles: action.articles
			};
		case ActionTypes.GET_CURR_ARTICLE_SUCCESS:
			return {
				...state,
				currentArticle: action.currentArticle
			};
		case ActionTypes.GET_TAGS:
			return {
				...state,
				tags: action.tags
			};
		default:
			return state;
	}
}

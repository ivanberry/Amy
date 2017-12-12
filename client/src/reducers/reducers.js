/**
 * specify how the application's state changes in response
 */
import * as ActionTypes from '../constants/actionTypes';

//The initial state
const initialState = {
	currentSending: false,
	loggedIn: false
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
		default:
			return state;
	}
}

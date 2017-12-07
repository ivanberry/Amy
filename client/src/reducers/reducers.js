/**
 * specify how the application's state changes in response
 */
import { LOGIN_IN, CHANGE_FORM, SENDING_REQUEST } from '../actions/actions';

//The initial state
const initialState = {
	formState: {
		username: '',
		password: ''
	},
	currentSending: false,
	loggedIn: false
};

export function homeReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_FORM:
			return Object.assign({}, state, {
				formState: action.newState
			});
		case SENDING_REQUEST:
			return Object.assign({}, state, {
				currentSending: action.sending
			});
		default:
			return state;
	}
}

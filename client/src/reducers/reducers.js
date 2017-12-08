/**
 * specify how the application's state changes in response
 */
import { /*LOGIN_IN, */ CHANGE_FORM, SENDING_REQUEST } from '../constants/actionTypes';

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
            return ({
                ...state,
                formsState: action.formState
            });
		case SENDING_REQUEST:
            return ({
                ...state,
                currentSending: action.sending
            });
		default:
			return state;
	}
}

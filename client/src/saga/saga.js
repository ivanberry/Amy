import * as ActionTypes from '../constants/actionTypes';
import { setAuthState, sendingRequest } from '../actions/actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

/**
 * 用户登录
 * @param {*} name
 * @param {*} password
 */
function loginI(name, password) {
	return axios.post('/api/login', {
		name,
		password
	});
}

function* login(action) {
	yield put(sendingRequest(true));
	try {
		const result = yield call(loginI, action.user.username, action.user.password);
		let isAuth = false;
		if (result.status === 200 && result.data.message === 'Login Successed!') {
			isAuth = true;
		}
		yield put(setAuthState(isAuth));
		yield put(sendingRequest(false));
	} catch (e) {
		yield put(sendingRequest(false));
		yield put({ type: 'LOGIN_IN_FAIL', message: e.message });
	}
}

function* mySaga() {
	yield takeEvery(ActionTypes.LOGIN_REQUEST, login); //subscribe the LOGIN_IN action
}

export default mySaga;

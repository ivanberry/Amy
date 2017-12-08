import { LOGIN_IN } from '../constants/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function loginI(name, password) {
	return axios.post('/api/login',{
			name,
			password
		}
	);
}

function* login(action) {
	try {
		const result = yield call(loginI, action.data.name, action.data.password);
		yield put({ type: 'LOGIN_IN_SUCCESS', result: result });
	} catch (e) {
		yield put({ type: 'LOGIN_IN_FAIL', message: e.message });
	}
}

function* mySaga() {
	yield takeEvery(LOGIN_IN, login);
}

export default mySaga;

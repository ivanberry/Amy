import * as ActionTypes from '../constants/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as helper from '../ulti';
import {
	setAuthState,
	sendingRequest,
	getArticleSuccess,
	getCurrArticleSucc,
	getTagsSuccess
} from '../actions/actions';

/**
 * 用户登录
 * @param {*} name
 * @param {*} password
 */
function _logIn(name, password) {
	return axios.post('/api/login', {
		name,
		password
	});
}

function _logOut() {
	return axios.get('/api/logout');
}

function _getArticles() {
	return axios.get('/api/articles');
}

function _getCurrArticle(id) {
	return axios.get(`/api/article/${id}`);
}

function _getAllTags() {
	return axios.get('/api/getTags');
}

function* loginFlow(action) {
	yield put(sendingRequest(true));
	try {
		const result = yield call(_logIn, action.user.username, action.user.password);
		let isAuth = false;
		if (result.status === 200 && result.data.message === 'Login Successed!') {
			isAuth = true;
		}
		yield put(setAuthState(isAuth));
		helper.storeInfo('user', action.user.username);
		yield put(sendingRequest(false));
	} catch (e) {
		yield put(sendingRequest(false));
		yield put({ type: 'LOGIN_IN_FAIL', message: e.message });
	}
}

function* logoutFlow() {
	yield put(sendingRequest(true));
	try {
		const result = yield call(_logOut);
		let isAuth = true;
		if (result.status === 200) {
			isAuth = false;
		}
		yield put(setAuthState(isAuth));
		helper.clearInfo('user');
		yield put(sendingRequest(false));
	} catch (e) {
		yield put({ type: 'LOGOUT_IN_FAIL', message: e.message });
		yield put(sendingRequest(false));
	}
}

function* getAllArticle() {
	yield put(sendingRequest(true));
	try {
		const result = yield call(_getArticles);
		if (result.status === 200) {
			yield put(sendingRequest(false));
			yield put(getArticleSuccess(result.data.data));
		}
	} catch (e) {
		yield put(sendingRequest(false));
		yield put({ type: 'GET_ARITCLE_FAIL', message: e.message });
	}
}

function* getCurrArticle(action) {
	yield put(sendingRequest(true));
	try {
		const result = yield call(_getCurrArticle, action.id);
		if (result.status === 200) {
			yield put(sendingRequest(false));
			yield put(getCurrArticleSucc(result.data.data[0]));
		}
	} catch (e) {
		yield put(sendingRequest(false));
		yield put({ type: 'GET_ARTICLE_FAIL', message: e.message });
	}
}

function* getAllTags() {
	yield put(sendingRequest(true));
	try {
		const result = yield call(_getAllTags);
		if (result.status === 200) {
			yield put(sendingRequest(false));
			yield put(getTagsSuccess(result.data.data));
		}
	} catch (e) {
		yield put(sendingRequest(false));
		yield put({ type: 'GET_ARTICLE_FAIL', message: e.message });
	}
}

function* mySaga() {
	yield takeEvery(ActionTypes.LOGIN_REQUEST, loginFlow); //subscribe the LOGIN_IN action
	yield takeEvery(ActionTypes.LOGOUT, logoutFlow); //subscribe the LOGIN_IN action
	yield takeEvery(ActionTypes.GET_ARTICLE, getAllArticle); //subscribe the GET_ARTICLE action
	yield takeEvery(ActionTypes.GET_ARTICLE_WITH_ID, getCurrArticle);
	yield takeEvery(ActionTypes.GET_TAGS, getAllTags);
}

export default mySaga;

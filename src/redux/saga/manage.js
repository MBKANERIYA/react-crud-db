import { call, put } from "redux-saga/effects";
import { DELET_USER_ERROR, DELET_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS } from "../main/action";
import { delete_user, get_user, post_user } from "../main/api";

function* handle_get_user(action) {
    try {
        let { data, status } = yield call(get_user, action)

        yield put({ type: GET_USER_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: GET_USER_ERROR, payload: err })
    }
}

function* handle_post_user(action) {
    try {
        let { data, status } = yield call(post_user, action)

        yield put({ type: POST_USER_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: POST_USER_ERROR, payload: err })
    }
}

function* handle_delete_user(action) {
    try {
        let { data, status } = yield call(delete_user, action)

        yield put({ type: DELET_USER_SUCCESS, payload: data })
    } catch (err) {
        yield put({ type: DELET_USER_ERROR, payload: err })
    }
}

export { handle_get_user, handle_post_user, handle_delete_user }
import { takeLatest } from "redux-saga/effects";
import { DELET_USER_PENDING, GET_USER_PENDING, POST_USER_PENDING } from "../main/action";
import { handle_delete_user, handle_get_user, handle_post_user } from "./manage";

function* handle_get_user_saga() {
    yield takeLatest(GET_USER_PENDING, handle_get_user)
}

function* handle_post_user_saga() {
    yield takeLatest(POST_USER_PENDING, handle_post_user)
}

function* handle_delete_user_saga() {
    yield takeLatest(DELET_USER_PENDING, handle_delete_user)
}
export { handle_get_user_saga, handle_post_user_saga, handle_delete_user_saga }
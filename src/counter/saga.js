import { takeLatest, put, takeEvery, select } from "redux-saga/effects";
import { INCREMENT_REQUEST, INCREMENT_SUCCESS, DECREMENT_REQUEST, DECREMENT_SUCCESS } from './actions/actionConstants';

export const getCount = (state) => state.counter.count;

function* increment() {
    const count = yield select(getCount);
    yield put({ type: INCREMENT_SUCCESS, payload: count + 1 })
}

function* decrement() {
    const count = yield select(getCount);
    yield put({ type: DECREMENT_SUCCESS, payload: count - 1 })
}


export default [
    takeLatest(INCREMENT_REQUEST, increment),
    takeLatest(DECREMENT_REQUEST, decrement),
];
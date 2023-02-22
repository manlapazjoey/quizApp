/* eslint-disable no-underscore-dangle */

import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadResult({ payload }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'GET',
      url: `answers/history?userId=${payload._id}`,
    });
    yield put({
      type: 'LOAD_RESULT_SUCCESS',
      payload: res,
    });
  } catch (error) {
    yield put({
      type: 'LOAD_RESULT_FAIL',
      payload: error,
    });
  }
}

function* submitAnswer({ payload }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'POST',
      url: 'quiz/submitAnswer',
      data: payload,
    });

    yield put({
      type: 'SUBMIT_ANSWER_SUCCESS',
      payload: res,
    });
  } catch (error) {
    yield put({
      type: 'SUBMIT_ANSWER_FAIL',
      payload: error,
    });
  }
}

function* submitAnswerRequest() {
  yield takeLatest('SUBMIT_ANSWERS_REQUEST', submitAnswer);
}

function* loadResultRequest() {
  yield takeLatest('LOAD_HISTORY_REQUEST', loadResult);
}

export default function* rootHistorySaga() {
  yield all([fork(loadResultRequest), fork(submitAnswerRequest)]);
}

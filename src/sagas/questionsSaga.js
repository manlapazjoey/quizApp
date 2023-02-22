import { all, fork, takeEvery } from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';

function* loadQuestionsRequest() {
  yield takeEvery('LOAD_QUESTIONS_REQUEST', apiGenerator);
}

export default function* rootQuestionsSaga() {
  yield all([fork(loadQuestionsRequest)]);
}

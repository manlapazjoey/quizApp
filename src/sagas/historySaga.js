import { all, fork, takeEvery } from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';

function* loadHistoryRequest() {
  yield takeEvery('LOAD_HISTORY_REQUEST', apiGenerator);
}

export default function* rootHistorySaga() {
  yield all([fork(loadHistoryRequest)]);
}

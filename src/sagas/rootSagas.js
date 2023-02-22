import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import cartSaga from './cartSaga';
import productsSaga from './productsSaga';
import questionsSaga from './questionsSaga';
import resultSaga from './resultSaga';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(cartSaga),
    fork(productsSaga),
    fork(questionsSaga),
    fork(resultSaga),
  ]);
}

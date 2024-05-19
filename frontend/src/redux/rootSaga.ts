import { all } from 'redux-saga/effects';
import songSaga from './sagas/songSaga';

export default function* rootSaga() {
  yield all([songSaga()]);
}

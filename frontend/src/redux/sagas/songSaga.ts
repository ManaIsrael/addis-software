import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchSongs, setSongs, fetchStatistics, setStatistics, addSong, updateSong, deleteSong } from '../slices/songSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../types';
import { SagaIterator } from 'redux-saga';

function* fetchSongsSaga(): SagaIterator {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/songs');
    yield put(setSongs(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* fetchStatisticsSaga(): SagaIterator {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/statistics');
    yield put(setStatistics(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* addSongSaga(action: PayloadAction<Song>): SagaIterator {
  try {
    const response = yield call(axios.post, 'http://localhost:3000/songs', action.payload);
    yield put(addSong(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* updateSongSaga(action: PayloadAction<Song>): SagaIterator {
  try {
    const response = yield call(axios.put, `http://localhost:3000/songs/${action.payload.id}`, action.payload);
    yield put(updateSong(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* deleteSongSaga(action: PayloadAction<string>): SagaIterator {
  try {
    yield call(axios.delete, `http://localhost:3000/songs/${action.payload}`);
    yield put(deleteSong(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* songSaga(): SagaIterator {
  yield takeLatest(fetchSongs.type, fetchSongsSaga);
  yield takeLatest(fetchStatistics.type, fetchStatisticsSaga);
  yield takeLatest(addSong.type, addSongSaga);
  yield takeLatest(updateSong.type, updateSongSaga);
  yield takeLatest(deleteSong.type, deleteSongSaga);
}

export default songSaga;

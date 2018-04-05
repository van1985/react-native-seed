import { types } from './actions';
import { put, takeEvery } from 'redux-saga/effects'

function* fetchData () {
  try {
    const response = yield fetch("https://randomuser.me/api");
    const data = JSON.parse(response._bodyText).results[0];
    yield put({ type: types.FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: types.FETCHING_DATA_FAILURE })
  }
}

function* dataSaga () {
  yield takeEvery(types.FETCHING_DATA, fetchData)
}



export default dataSaga
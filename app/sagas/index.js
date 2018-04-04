import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchData () {
  try {
    const response = yield fetch("https://randomuser.me/api");
    const data = JSON.parse(response._bodyText).results[0];
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData)
}



export default dataSaga
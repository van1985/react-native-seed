import { types } from './actions';

const initialState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_DATA:
      return Object.assign({}, state, {
        data: {},
        isFetching: true
      })
    case types.FETCHING_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataFetched: true,
        data: action.data
      })
    case types.FETCHING_DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      })
    default:
      return state
  }
}
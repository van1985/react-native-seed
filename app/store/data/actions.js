const types = {
  FETCHING_DATA: 'FETCHING_DATA',
  FETCHING_DATA_SUCCESS: 'FETCHING_DATA_SUCCESS',
  FETCHING_DATA_FAILURE: 'FETCHING_DATA_FAILURE'
};

function fetchData() {
  return {
    type: types.FETCHING_DATA
  }
}

export { types };
export default {
  types,
  fetchData
};
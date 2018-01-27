import * as types from './types'
import Api from '../lib/api'
import createReducer from '../lib/createReducer';

export function fetchRecipes(term) {
  return (dispatch, getState) => {
    return Api.get('/search?term='+term+'&limit=10')
  .then(function(response) {
    dispatch(setSearchedRecipes({recipes: JSON.parse(response.originalResponse._bodyInit)}));
  }).catch( (ex) => {
  console.log(ex);
});
  }
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}

export const searchedRecipes = createReducer({},{

});
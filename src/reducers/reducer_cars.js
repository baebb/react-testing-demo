import {FIND_CAR, GET_MAKES, GET_MODELS} from '../actions/index';

const INIT_STATE = {currentMakes: [], currentModels: []};

export default function (state = INIT_STATE, action) {
  console.log('reducer hit', action.type);
  switch (action.type) {
    case GET_MAKES:
      return {...state, currentMakes: action.payload};
    case GET_MODELS:
      return {...state, currentModels: action.payload};
    default:
      return state;
  }
}
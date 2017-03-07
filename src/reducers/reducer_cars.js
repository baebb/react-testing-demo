import {FIND_CAR, GET_MAKES, GET_MODELS, GET_DETAILS, GET_CAR_OF_THE_WEEK} from '../actions/index';

const INIT_STATE = {currentMakes: [], currentModels: [], selectedCar: {}, carOfTheWeek: {}};

export default function (state = INIT_STATE, action) {
  // console.log('reducer hit', action.type, action.payload);
  switch (action.type) {
    case GET_MAKES:
      return {...state, currentMakes: action.payload};
    case GET_MODELS:
      return {...state, currentModels: action.payload};
    case GET_DETAILS:
      return {...state, selectedCar: action.payload};
    case GET_CAR_OF_THE_WEEK:
      return {...state, carOfTheWeek: action.payload};
    default:
      return state;
  }
}
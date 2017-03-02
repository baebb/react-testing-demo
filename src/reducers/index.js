import {combineReducers} from 'redux';

import CarsReducer from './reducer_cars';

const rootReducer = combineReducers({
  cars: CarsReducer,
});

export default rootReducer;

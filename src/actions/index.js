import {browserHistory} from 'react-router';
import makes from '../../data/makes';
import models from '../../data/models';

export const FIND_CAR = 'FIND_CAR';
export const GET_MAKES = 'GET_MAKES';
export const GET_MODELS = 'GET_MODELS';

export function findCar(make, model, id) {
  const path = `/${make}/${model}/300`;
  const url = browserHistory.push(path);
  
  return {
    type: FIND_CAR,
    payload: url
  }
}

export function getMakes() {
  let carMakes = makes;
  console.log('action hit', carMakes);
  
  return {
    type: GET_MAKES,
    payload: carMakes
  }
}

export function getModels(makeId) {
  const carModels = models
    .filter((model) => {
      return model.makeId === makeId;
    });
  
  console.log('action hit', carModels);
  
  return {
    type: GET_MODELS,
    payload: carModels
  }
}
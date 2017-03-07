import {browserHistory} from 'react-router';
import makes from '../../data/makes';
import models from '../../data/models';
import carOfTheWeek from '../../data/carOfTheWeek';

export const FIND_CAR = 'FIND_CAR';
export const GET_MAKES = 'GET_MAKES';
export const GET_MODELS = 'GET_MODELS';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_CAR_OF_THE_WEEK = 'GET_CAR_OF_THE_WEEK';

export function findCar(make, model, id) {
  const path = `/${make}/${model}/${id}`;
  const url = browserHistory.push(path);
  return {
    type: FIND_CAR,
    payload: url
  }
}

export function getMakes() {
  return {
    type: GET_MAKES,
    payload: makes
  }
}

export function getModels(makeId) {
  const selectedMakeModels = models
    .filter((model) => {
      return model.makeId == makeId;
    });
  return {
    type: GET_MODELS,
    payload: selectedMakeModels
  }
}

export function getDetails(id) {
  const selectedCar = models
    .find((model) => {
      return model.id == id;
    });
  const selectedCarMake = makes
    .find((make) => {
      return make.id == selectedCar.makeId
    });
  selectedCar.make = selectedCarMake.name;
  return {
    type: GET_DETAILS,
    payload: selectedCar
  }
}

export function getCarOfTheWeek() {
  const carData = getDetails(carOfTheWeek.modelId);
  const combinedData = Object.assign(carOfTheWeek, carData.payload);
  return {
    type: GET_CAR_OF_THE_WEEK,
    payload: combinedData
  }
}
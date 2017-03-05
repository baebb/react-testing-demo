import {expect} from '../test_helper';
import * as router from 'react-router';
import makes from '../../data/makes';
import models from '../../data/models';

//types
import {FIND_CAR, GET_MAKES, GET_MODELS} from '../../src/actions/index';
//actions
import {findCar, getMakes, getModels} from '../../src/actions/index';

describe('Actions', () => {
  describe('findCar', () => {
    router.browserHistory = { push: ()=>{} };
    const action = findCar('BMW', '2');
    it('has the correct type', () => {
      expect(action.type).to.equal(FIND_CAR);
    })
  });
  describe('getMakes', () => {
    const action = getMakes();
    it('has the correct type', () => {
      expect(action.type).to.equal(GET_MAKES);
    })
    it('has the correct paylaod', () => {
      expect(action.payload).to.equal(makes);
    })
  });
  describe('getModels', () => {
    const modelNumber = 20;
    const action = getModels(modelNumber);
    const selectedMakeModels = models
      .filter((model) => {
        return model.makeId === modelNumber;
      });
    it('has the correct type', () => {
      expect(action.type).to.equal(GET_MODELS);
    })
    it('has the correct payload', () => {
      expect(action.payload).to.deep.equal(selectedMakeModels);
    })
  });
});
import {renderComponent, expect} from '../test_helper';
import Detail from '../../src/containers/detail';

describe('Detail', () => {
  let component;
  
  const correctParams = {
    params: {
      id: 320
    }
  };
  const incorrectParams = {
    params: {
      id: 9
    }
  };
  
  it('should render car data with correct id param', () => {
    component = renderComponent(Detail, correctParams);
    expect(component.find('.car-details')).to.exist;
  });
  it('should render an error with incorrect id param', () => {
    component = renderComponent(Detail, incorrectParams);
    expect(component.find('.no-car-found')).to.exist;
  });
});
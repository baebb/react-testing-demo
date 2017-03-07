import {renderComponent, expect} from '../test_helper';
import Home from '../../src/containers/home';

describe('Home', () => {
  let component;
  
  it('should render the correct car of the week', () => {
    component = renderComponent(Home);
    expect(component.find('.carName')).to.have.text('Car model: MX-5');
  });
});
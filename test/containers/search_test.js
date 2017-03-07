import {renderComponent, expect} from '../test_helper';
import Search from '../../src/containers/search';

describe('Search', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Search);
  });

  it('has 2 select inputs', () => {
    expect(component.find('select').length).to.equal(2);
  });

  it('has a button', () => {
    expect(component.find('button[type=submit]')).to.exist;
  });
  describe('Selecting Options', () => {
    it('gets available model names for the selected make', () => {
      component.find('#selectedMake').simulate('change', {target: {value: 'Porsche'}});
      expect(component.find('#selectedModel > *').length).to.equal(4);
    })
  });
  describe('Validation', () => {
    let makeSelect;
    let modelSelect;
    let submit;

    beforeEach(() => {
      submit = component.find('#submit');
      makeSelect = component.find('#selectedMake');
      modelSelect = component.find('#selectedModel');
    });

    it('prevents form submission with no options selected', () => {
      expect(submit).to.have.prop('disabled', true);
    });
    it('prevents model selection with no make selected', () => {
      expect(modelSelect).to.have.prop('disabled', true);
    });
    it('enables model selection with a make selected', () => {
      makeSelect.simulate('change', {target: {value: 'Porsche'}});
      expect(modelSelect).to.have.prop('disabled', false);
    });
    it('enables form submission with a make & model selected', () => {
      makeSelect.simulate('change', {target: {value: 'Porsche'}});
      modelSelect.simulate('change', {target: {value: 'Panamera 4S'}});
      expect(submit).to.have.prop('disabled', false);
    })
  });
});


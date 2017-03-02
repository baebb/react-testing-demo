import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import {findCar, getMakes, getModels} from '../actions/index';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMake: '',
      selectedModel: '',
      message: ''
    };
    
  }
  
  componentDidMount() {
    this.props.dispatch(getMakes());
  }
  
  validate(e) {
    e.preventDefault();
    let {selectedMake, selectedModel} = this.state;
    if (selectedMake === '') {
      this.setState({...this.state, message: 'Select a car make'});
      console.log('no selected make');
    }
    else if (selectedModel === '') {
      console.log('no model');
      this.setState({...this.state, message: 'Select a car model'});
    }
    else {
      console.log('success');
      this.setState({...this.state, message: ''});
      findCar(selectedMake, selectedModel, )
    }
  }
  
  renderMakes(makeObj) {
    let {id, name} = makeObj;
    return (
      <option key={id} value={name}>{name}</option>
    )
  }
  
  renderModels(modelObj) {
    let {id, name} = modelObj;
    return (
      <option key={id} value={name}>{name}</option>
    )
  }
  
  handleChange(key, e) {
    let newValue = e.target.value;
    this.setState({...this.state, [key]: newValue});
    if (key === 'selectedMake') {
      let makeObj = this.props.currentMakes.find((make) => {
        return make.name === newValue;
      });
      this.props.dispatch(getModels(makeObj.id));
    }
  }
  
  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-md-offset-3">
            <form onSubmit={this.validate.bind(this)}>
              <FormGroup controlId="selectedMake">
                <ControlLabel>Car make:</ControlLabel>
                <FormControl
                  defaultValue="placeholder"
                  componentClass="select"
                  onChange={this.handleChange.bind(this, 'selectedMake')}
                >
                  <option value="placeholder" disabled>Select</option>
                  {this.props.currentMakes.map(this.renderMakes)}
                </FormControl>
              </FormGroup>
              <FormGroup controlId="selectedModel">
                <ControlLabel>Car model:</ControlLabel>
                <FormControl
                  componentClass="select"
                  defaultValue="placeholder"
                  onChange={this.handleChange.bind(this, 'selectedModel')}
                >
                  <option value="placeholder" disabled>Select</option>
                  {this.props.currentModels.map(this.renderModels)}
                </FormControl>
              </FormGroup>
              {this.state.message && <HelpBlock>{this.state.message}</HelpBlock>}
              <Button
                block
                bsStyle="danger"
                type="submit"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentMakes: state.cars.currentMakes,
    currentModels: state.cars.currentModels
  }
}

export default connect(mapStateToProps, null)(Search);
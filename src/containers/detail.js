import React from 'react';
import {connect} from 'react-redux';
import {getDetails} from '../actions/index';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '123',
      cat: 'cat'
    }
  }

  componentWillMount() {
    let { id, model, make } = this.props.params;
    this.props.dispatch(getDetails(id));
    // this.setState({...this.state, id: id, model: model, make: make});
  }

  render() {
    return (
      <div>
        <ul></ul>
        <p>{this.state.make}</p>
        <p>{this.state.model}</p>
        <p>{this.state.id}</p>
        <p>{this.state.cat}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedCar: state.cars.selectedCar
  }
}

export default connect(mapStateToProps, null)(Detail);
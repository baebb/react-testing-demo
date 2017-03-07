import React from 'react';
import {connect} from 'react-redux';
import {getDetails, getCarOfTheWeek} from '../actions/index';


class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCarOfTheWeek());
  }
  
  render() {
    return (
      <div>
        <ul></ul>
        <p>Sup Ross</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    carOfTheWeek: state.cars.carOfTheWeek
  }
}

export default connect(mapStateToProps, null)(Home);
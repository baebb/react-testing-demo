import React from 'react';
import {connect} from 'react-redux';
import {getDetails} from '../actions/index';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
    }
  }
  
  componentWillMount() {
    const {id, model, make} = this.props.params;
    this.setState({...this.state, make: make});
    this.props.dispatch(getDetails(id));
  }
  
  render() {
    const {selectedCar} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-md-offset-3">
            {selectedCar ?
              <div className="car-details text-center">
                <p><strong>Car make:</strong> {this.state.make}</p>
                <p><strong>Car model:</strong> {selectedCar.name}</p>
                <p><strong>Car price:</strong> {selectedCar.price}</p>
                <img className="img-responsive" src={selectedCar.imageUrl}/>
              </div>
              :
              <div className="no-car-found text-center">
                <p><strong>No car found</strong></p>
              </div>
            }
          </div>
        </div>
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
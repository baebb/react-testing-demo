import React from 'react';
import {connect} from 'react-redux';
import {getCarOfTheWeek} from '../actions/index';


class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCarOfTheWeek());
  }
  
  render() {
    const {carOfTheWeek} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-md-offset-3">
            <div className="car-details text-center">
              <h2>Car of the week:</h2>
              <p className="carMake"><strong>Car make:</strong> {carOfTheWeek.make}</p>
              <p className="carName"><strong>Car model:</strong> {carOfTheWeek.name}</p>
              <p className="carPrice"><strong>Car price:</strong> {carOfTheWeek.price}</p>
              <p className="carReview"><strong>Car review:</strong> {carOfTheWeek.review}</p>
              <img className="carPicture img-responsive" src={carOfTheWeek.imageUrl}/>
            </div>
          </div>
        </div>
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
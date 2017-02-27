import React from 'react';
import {connect} from 'react-redux';


class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  componentWillMount() {
    
  }
  
  render() {
    return (
      <div>
        <ul></ul>
        <p>404 not found</p>
      </div>
    )
  }
}

export default connect(null, null)(NotFound);
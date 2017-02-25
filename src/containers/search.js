import React from 'react';
import {connect} from 'react-redux';


class Search extends React.Component {
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
        <p>Search</p>
      </div>
    )
  }
}

export default connect(null, null)(Search);
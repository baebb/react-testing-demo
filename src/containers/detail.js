import React from 'react';
import {connect} from 'react-redux';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '123',
      cat: 'dog'
    }
  }

  componentWillMount() {
    this.setState({...this.state, id: this.props.params.id});
  }

  render() {
    return (
      <div>
        <ul></ul>
        <p>{this.state.id}</p>
        <p>{this.state.cat}</p>
      </div>
    )
  }
}

export default connect(null, null)(Detail);
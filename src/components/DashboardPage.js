import React from 'react';
import { connect } from 'react-redux';

import Main from './ui/Main';

import { getSessionPlace } from '../actions/sessions';

class DashboardPage extends React.Component {
  componentDidMount() {
    if (!this.props.sessionPlaceLoaded) {
      this.props.getSessionPlace()
    }
  }

  render() {
    return (
      <Main pathName={this.props.location.pathname} >
        DashBoard
      </Main>
    );
  }
}

const mapStateToProps =  state => ({
  sessionPlace: state.sessions.sessionPlace,
  sessionPlaceLoaded: state.sessions.sessionPlaceLoaded
})

export default connect(mapStateToProps, { getSessionPlace })(DashboardPage);

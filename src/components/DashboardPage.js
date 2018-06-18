import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Main from './ui/Main';

import SessionItem from './SessionItem';

import { getSessionPlace } from '../actions/sessions';
import { getParking } from '../actions/parkings';
import theme from '../styles/theme';

const SessionList = styled.div`
  background: white;
  border-radius: 10px;
  padding: ${theme.spacing.s};
`;

const SessionsTitle = styled.div`
  border-bottom: 1px solid ${theme.colors.brandTertiary};
  display: flex;
  width: 100%;

  p {
    margin: ${theme.spacing.s} 0;
  }
`;

const Capteur = styled.p`
  width: 40%;
`;

const StartDate = styled.p`
  width: 30%;
`;

const EndDate = styled.p`
  width: 30%;
`;
class DashboardPage extends React.Component {
  componentDidMount() {
    if (!this.props.sessionPlaceLoaded) {
      this.props.getSessionPlace()
    }
    if (!this.props.parkingsLoaded) {
      this.props.getParking()
    }
  }

  render() {
    return (
      <Main pathName={this.props.location.pathname} >
        DashBoard
        <SessionList>
          <SessionsTitle>
            <Capteur>Capteur</Capteur>
            <StartDate>Date de début</StartDate>
            <EndDate>Date de fin</EndDate>
          </SessionsTitle>
          {this.props.sessionPlace.map((session, index) => <SessionItem key={index} {...session} />)}
        </SessionList>
      </Main>
    );
  }
}

const mapStateToProps =  state => ({
  sessionPlace: state.sessions.sessionPlace,
  sessionPlaceLoaded: state.sessions.sessionPlaceLoaded,
  errorSession: state.sessions.errorLoading,
  parkings: state.parkings.parkings,
  parkingsLoaded: state.parkings.parkingsLoaded,
  errorParking: state.parkings.errorLoading
})

export default connect(mapStateToProps, { getSessionPlace, getParking })(DashboardPage);

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Main from './ui/Main';

import SessionItem from './SessionItem';
import SensorItem from './SensorItem';

import { getSessionPlace } from '../actions/sessions';
import { getParking } from '../actions/parkings';
import { getAlert } from '../actions/alerts';
import { getSensor } from '../actions/sensors';
import { sessionPerParking } from '../selectors/sessions';
import theme from '../styles/theme';

const SensorList = styled.div`
  background: white;
  border-radius: 10px;
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.s};
`;

const SensorTitle = styled.div`
  border-bottom: 1px solid ${theme.colors.brandTertiary};
  display: flex;
  width: 100%;
`;

const SensorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SessionList = styled.div`
  background: white;
  border-radius: 10px;
  padding: ${theme.spacing.s};
  margin-bottom: ${theme.spacing.s};
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
    if (!this.props.userDataLoaded) {
      this.props.getSessionPlace();
      this.props.getParking();
      this.props.getSensor();
    }
    if (!this.props.adminDataLoaded) {
      this.props.getAlert();
    }
  }

  render() {
    return (
      <Main pathName={this.props.location.pathname} >
        DashBoard
        <SensorList>
          <SensorTitle>Etat des capteurs</SensorTitle>
          <SensorContainer>
            {this.props.sensors.map((sensor, index) => <SensorItem
              key={index} {...sensor}
              session={this.props.sessionPlace.filter(session => (session.identifier === sensor.identifier && session.endDate === null)).length > 0}
              alert={this.props.alerts.filter(alert => (alert.identifier === sensor.identifier && alert.status !== 'closed')).length > 0}
            />)}
          </SensorContainer>
        </SensorList>
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
  userDataLoaded: state.sessions.sessionPlaceLoaded && state.parkings.parkingsLoaded && state.sensors.sensorsLoaded,
  errorSession: state.sessions.errorLoading,
  parkings: state.parkings.parkings,
  errorParking: state.parkings.errorLoading,
  adminDataLoaded: state.alerts.alertsLoaded || state.user.user.userType !== 'admin',
  sensors: state.sensors.sensors,
  alerts: state.alerts.alerts,
  errorSensor: state.sensors.errorLoading,
  data: sessionPerParking(state.parkings.parkings, state.sessions.sessionPlace)
})

export default connect(mapStateToProps, { getSessionPlace, getParking, getAlert, getSensor })(DashboardPage);
